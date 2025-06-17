import type { Metadata } from "next";
import { playfair, inter } from "../styles/font";
import "../styles/globals.css";
import { Header } from "../components/layout/header/header";
import Footer from "../components/layout/footer";
import { ThemeProvider } from "../contexts/theme";

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
            <body
                className={`${inter.className} antialiased bg-slate-50 dark:bg-custom-charcoal sm:mx-8 lg:mx-16 dark:text-white`}>
                <ThemeProvider>
                    <div className="max-w-7xl mx-auto border-x border-slate-200 dark:border-neutral-600 bg-white dark:bg-custom-charcoal-dark pt-12 px-6 sm:px-8 lg:px-12">
                        <Header />
                        <div className="container">
                            <h1 className={`${playfair.className} antialiased mt-8 text-4xl dark:text-white`}>
                                Clara Mauro-Gioan
                            </h1>
                            <h2 className="text-4xl font-bold mt-4 text-custom-brown-dark dark:text-custom-green">
                                Développeuse web fullstack JavaScript - TypeScript
                            </h2>
                        </div>
                        {children}
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
