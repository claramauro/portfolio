import Link from "next/link";

export default function Footer() {
    return (
        <div className="border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 mt-20 -mx-7 sm:-mx-8 lg:-mx-12 px-16 py-8">
            <nav>
                <ul className="flex flex-row items-center justify-center gap-x-6">
                    <li className="transition duration-300 hover:text-custom-brown">
                        <Link href={"/"}>Accueil</Link>
                    </li>
                    <li className="transition duration-300 hover:text-custom-brown">
                        <Link href={"/projets"}>Projets</Link>
                    </li>
                    <li className="transition duration-300 hover:text-custom-brown">
                        <Link href={"/cv"}>CV</Link>
                    </li>
                </ul>
            </nav>
            <p className="text-sm text-gray-400">Clara Mauro-Gioan - 2025</p>
        </div>
    );
}
