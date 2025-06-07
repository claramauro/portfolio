"use client";

import { Navbar } from "./navbar";
import { SwitchThemeBtn } from "./switchThemeBtn";
import { Avatar } from "./avatar";
import { useEffect, useRef } from "react";

export function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const lastScrollRef = useRef(0);

    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const lastScroll = lastScrollRef.current;
            const scrollTarget = 67; // 115 - 48 (position initial avatar - padding top conteneur)
            const scrollDiff = Math.abs(currentScroll - lastScroll);

            if (scrollDiff < 5) return;

            if (currentScroll > scrollTarget && currentScroll > lastScroll) {
                header.style.opacity = "0";
                header.style.pointerEvents = "none";
            } else if (currentScroll < lastScroll || currentScroll <= 0) {
                header.style.opacity = "1";
                header.style.pointerEvents = "auto";
            }
            lastScrollRef.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header ref={headerRef} className="w-full h-[132px] relative transition-all duration-500 ease-in-out">
            <div className="flex justify-center items-center">
                <Navbar />
                <SwitchThemeBtn />
            </div>
            <Avatar />
        </header>
    );
}
