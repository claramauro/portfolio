"use client";

import { Navbar } from "./navbar";
import { SwitchThemeBtn } from "./switchThemeBtn";
import { Avatar } from "./avatar";

export function Header() {
    return (
        <header className="w-full h-44 relative">
            <div className="flex justify-center items-center">
                <Navbar />
                <SwitchThemeBtn />
            </div>
            <Avatar />
        </header>
    );
}
