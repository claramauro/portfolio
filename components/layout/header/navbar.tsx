"use client";

export function Navbar() {
    return (
        <div className="fixed z-50 top-12">
            <nav className="border border-yellow-800 bg-white rounded-full p-2 h-10 w-[50%] min-w-[260px]">
                <ul className="flex flex-row justify-center items-center gap-x-8">
                    <li>Accueil</li>
                    <li>Projets</li>
                    <li>CV</li>
                </ul>
            </nav>
        </div>
    );
}
