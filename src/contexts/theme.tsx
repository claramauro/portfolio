"use client";

import { createContext, useContext, useLayoutEffect, useState } from "react";

type theme = "light" | "dark";

const ThemeContext = createContext<{ theme: string; switchTheme: () => void } | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<theme>("light");

    useLayoutEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "light" || storedTheme === "dark") {
            setTheme(storedTheme);
            document.documentElement.classList.toggle("dark", storedTheme === "dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    }, []);

    useLayoutEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    function switchTheme() {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return <ThemeContext.Provider value={{ theme, switchTheme }}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used in a ThemeProvider");
    }
    return context;
}
