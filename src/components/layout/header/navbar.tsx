"use client";

import { SwitchThemeBtn } from "./switchThemeBtn";
import { KeyboardEvent, MouseEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../../../libs/navLinks";
import ChevronDownIcon from "@/src/components/ui/icons/chevronDown";
import ChevronUpIcon from "@/src/components/ui/icons/chevronUp";
import { useThemeContext } from "@/src/contexts/theme";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const switchThemeRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const pathname = usePathname();

    const { theme } = useThemeContext();
    const isDarkMode = theme === "dark" ? true : false;

    function handleClickMenu(event: MouseEvent<HTMLDivElement>) {
        const targetElement = event?.target as Node;
        if (switchThemeRef.current?.contains(targetElement)) {
            return;
        }
        setIsMenuOpen(!isMenuOpen);
    }

    function toggleMenuOnKeyPress(event: KeyboardEvent<HTMLDivElement>) {
        if (event.key === "Enter" && !isMenuOpen) {
            setIsMenuOpen(true);
        }
        if (event.key === "Escape" && isMenuOpen) {
            setIsMenuOpen(false);
        }
    }

    useEffect(() => {
        const handleClickCloseMenu = (event: globalThis.MouseEvent) => {
            const target = event.target as Node;
            if (!isMenuOpen || !menuRef.current) {
                return;
            }
            if (!menuRef.current?.contains(target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickCloseMenu);

        return () => {
            document.removeEventListener("mousedown", handleClickCloseMenu);
        };
    }, [isMenuOpen]);

    return (
        <div className="fixed z-50 top-12 w-full sm:w-1/2">
            {/* Mobile */}
            <div ref={menuRef} className="sm:hidden absolute right-6">
                <div
                    onKeyDown={toggleMenuOnKeyPress}
                    onClick={handleClickMenu}
                    tabIndex={0}
                    className={`border border-custom-brown-light  dark:border-neutral-500 bg-white dark:bg-custom-charcoal shadow-md min-h-10 min-w-30 flex flex-col items-center ${
                        isMenuOpen ? "p-4 rounded-2xl" : "p-2 rounded-full"
                    }`}>
                    <div className="group flex flex-row justify-center items-center gap-2">
                        <span>Menu</span>
                        {isMenuOpen ? (
                            <ChevronUpIcon isDarkMode={isDarkMode} />
                        ) : (
                            <ChevronDownIcon isDarkMode={isDarkMode} />
                        )}
                    </div>
                    <div className={isMenuOpen ? "" : "hidden"}>
                        <nav className="mt-3 text-center">
                            <ul className="flex flex-col gap-3">
                                {navLinks.map((link) => {
                                    const isActive = link.href === "/" ? pathname === "/" : pathname === link.href;
                                    return (
                                        <li
                                            key={link.name}
                                            className={
                                                isActive
                                                    ? "transition duration-300 text-custom-brown hover:text-custom-brown"
                                                    : "transition duration-300 hover:text-custom-brown"
                                            }>
                                            <Link href={link.href}>{link.name}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                        <div ref={switchThemeRef} className="mt-4">
                            <SwitchThemeBtn small={true} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop */}
            <div className="hidden sm:flex justify-center">
                <nav className="border border-custom-brown-light dark:border-neutral-500 bg-white dark:bg-custom-charcoal rounded-full p-2 h-10 min-w-[260px] shadow-md">
                    <ul className="flex flex-row justify-center items-center gap-x-8">
                        {navLinks.map((link) => {
                            const isActive = link.href === "/" ? pathname === "/" : pathname === link.href;
                            return (
                                <li
                                    key={link.name}
                                    className={
                                        isActive
                                            ? "active transition duration-300 hover:text-custom-brown"
                                            : "transition duration-300 hover:text-custom-brown"
                                    }>
                                    <Link href={link.href}>{link.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
