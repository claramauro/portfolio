import type { Metadata } from "next";
import { playfair, sourcesans } from "../styles/font";
import "../styles/globals.scss";
import { Header } from "../components/layout/header/header";

export const metadata: Metadata = {
    title: "Clara Mauro-Gioan | Portfolio",
    description: "Portfolio de Clara Mauro-Gioan, développeuse web fullstack JavaScript",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={`${sourcesans.variable} ${playfair.variable}`}>
            <body className={`${sourcesans.className} antialiased bg-slate-50 sm:mx-8 lg:mx-16`}>
                <div className="max-w-6xl mx-auto border-x border-slate-200 bg-white pt-12 px-4 sm:px-8 lg:px-12">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
