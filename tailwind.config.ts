import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // selon ta structure, adapte les chemins
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            maxWidth: {
                "4xl": "56rem",
            },
        },
    },
    plugins: [],
};

export default config;
