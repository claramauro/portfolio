"use client";

import Image from "next/image";

export function SwitchThemeBtn() {
    return (
        <div className="bg-white fixed z-50 top-12 right-4 sm:right-16 lg:right-28">
            <button
                type="button"
                aria-label="Passer en mode sombre"
                className="border border-yellow-800 p-2 rounded-full h-10">
                <Image src="/icons/darkmode-icon.svg" alt="" width={24} height={24} />
            </button>
        </div>
    );
}
