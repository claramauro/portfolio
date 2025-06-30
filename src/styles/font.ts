import { Inter, Playfair_Display, Monoton } from "next/font/google";

export const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
export const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
export const monoton = Monoton({ variable: "--font-monoton", subsets: ["latin"], weight: "400" });
