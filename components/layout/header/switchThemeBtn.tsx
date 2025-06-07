"use client";

import Image from "next/image";

export function SwitchThemeBtn() {
    return (
        <div className="absolute right-10">
            <div className="bg-white z-50 fixed">
                <button
                    type="button"
                    aria-label="Passer en mode sombre"
                    className="border border-yellow-800 p-2 rounded-full h-10">
                    <Image src="/icons/darkmode-icon.svg" alt="" width={24} height={24} />
                </button>
            </div>
        </div>
    );
}
