"use client";

import Image from "next/image";
import { SwitchThemeBtn } from "./switchThemeBtn";
import { MouseEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const switchThemeRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // Gerer focus

    function handleClickMenu(event: MouseEvent<HTMLDivElement>) {
        const targetElement = event?.target as Node;
        if (switchThemeRef.current?.contains(targetElement)) {
            return;
        }
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleClickForMenu = (event: globalThis.MouseEvent) => {
            const target = event.target as Node;

            if (
                isMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(target) &&
                !switchThemeRef.current?.contains(target)
            ) {
                console.log("oui");

                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickForMenu);

        return () => {
            document.removeEventListener("mousedown", handleClickForMenu);
        };
    }, []);

    return (
        <div className="fixed z-50 top-12 w-full sm:w-1/2">
            {/* Mobile */}
            <div ref={menuRef} className="sm:hidden absolute right-6">
                <div
                    onClick={handleClickMenu}
                    tabIndex={0}
                    className={`border border-yellow-800 bg-white min-h-10 min-w-30 text-sm flex flex-col items-center ${
                        isMenuOpen ? "p-4 rounded-2xl" : "p-2 rounded-full"
                    }`}>
                    <div className="flex flex-row justify-center items-center gap-2">
                        <span>Menu</span>
                        <Image src="/icons/chevron-down.svg" width={16} height={16} alt="" />
                    </div>
                    <div className={isMenuOpen ? "" : "hidden"}>
                        <nav className="mt-3 text-center">
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <Link href={"/"}>Accueil</Link>
                                </li>
                                <li>
                                    <Link href={"/projets"}>Projets</Link>
                                </li>
                                <li>
                                    <Link href={"/cv"}>CV</Link>
                                </li>
                            </ul>
                        </nav>
                        <div ref={switchThemeRef} className="mt-3">
                            <SwitchThemeBtn small={true} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop */}
            <div className="hidden sm:flex justify-center">
                <nav className=" border border-yellow-800 bg-white rounded-full p-2 h-10 min-w-[260px]">
                    <ul className="flex flex-row justify-center items-center gap-x-8 text-sm">
                        <li>Accueil</li>
                        <li>Projets</li>
                        <li>CV</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
