"use client";

import { useThemeContext } from "@/src/contexts/theme";
import Image from "next/image";

export function SwitchThemeBtn({ small }: { small: boolean }) {
    const { theme, switchTheme } = useThemeContext();

    return (
        <div
            className={`flex ${
                theme === "dark" ? "justify-start" : "justify-end"
            } rounded-full border border-slate-400 dark:border-neutral-600 bg-custom-brown-light dark:bg-neutral-500 shadow-inner ${
                small ? "w-[56px]" : "w-[70px]"
            } ${small ? "h-[30px]" : "h-[40px]"}`}
            onClick={switchTheme}>
            <button
                type="button"
                aria-label="Passer en mode sombre"
                className={`border border-custom-brown  dark:border-neutral-600 bg-white dark:bg-custom-charcoal rounded-full ${
                    small ? "h-[28px]" : "h-full"
                } ${small ? "w-[30px]" : "w-[40px]"} flex justify-center items-center`}>
                <Image
                    src={`/icons/${theme === "light" ? "moon" : "sun"}.svg`}
                    alt=""
                    width={24}
                    height={24}
                    className="size-5"
                />
            </button>
        </div>
    );
}
