import type { Metadata } from "next";
import { playfair, inter } from "../styles/font";
import "../styles/globals.css";
import { Header } from "../components/layout/header/header";
import Footer from "../components/layout/footer";

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
        <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
            <body className={`${inter.className} antialiased bg-slate-50 sm:mx-8 lg:mx-16`}>
                <div className="max-w-7xl mx-auto border-x border-slate-200 bg-white pt-12 px-6 sm:px-8 lg:px-12">
                    <Header />
                    <div className="container">
                        <h1 className={`${playfair.className} antialiased mt-8 text-4xl`}>Clara Mauro-Gioan</h1>
                        <h2 className="text-4xl font-bold mt-4">Développeuse web fullstack JavaScript</h2>
                    </div>
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
