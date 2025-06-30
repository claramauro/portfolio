"use client";

import { usePathname } from "next/navigation";
import { navLinks } from "../../libs/navLinks";
import Link from "next/link";

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer className="border-t border-slate-200 dark:border-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-6 mt-20 -mx-7 sm:-mx-8 lg:-mx-12 px-16 py-8">
            <nav>
                <ul className="flex flex-row items-center justify-center gap-x-6">
                    {navLinks.map((link) => {
                        const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                        return (
                            <li
                                key={link.name}
                                className={
                                    isActive
                                        ? "border-b border-custom-brown-light dark:border-neutral-400 transition duration-300"
                                        : "transition duration-300 border-b border-transparent hover:border-custom-brown-light"
                                }>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <p className="text-sm text-gray-400">Clara Mauro-Gioan - 2025</p>
        </footer>
    );
}
