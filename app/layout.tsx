import type { Metadata } from "next";
import { playfair, sourcesans } from "../styles/font";
import "../styles/globals.css";

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
            <body className={`${sourcesans.className} antialiased`}>{children}</body>
        </html>
    );
}
