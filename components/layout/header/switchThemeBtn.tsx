"use client";

import Image from "next/image";

export function SwitchThemeBtn({ small }: { small: boolean }) {
    return (
        <div
            className={`rounded-full border border-slate-400 bg-custom-brown-light shadow-inner ${
                small ? "w-[56px]" : "w-[70px]"
            } ${small ? "h-[30px]" : "h-[40px]"}`}>
            <button
                type="button"
                aria-label="Passer en mode sombre"
                className={`border border-custom-brown bg-white rounded-full ${small ? "h-[28px]" : "h-full"} ${
                    small ? "w-[30px]" : "w-[40px]"
                } flex justify-center items-center`}>
                <Image src="/icons/darkmode-icon.svg" alt="" width={24} height={24} className="size-5" />
            </button>
        </div>
    );
}
