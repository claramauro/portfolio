type navLinks = {
    name: string;
    href: string;
    externalLink?: boolean;
};

export const navLinks: navLinks[] = [
    {
        name: "Accueil",
        href: "/",
    },
    {
        name: "Projets",
        href: "/projects",
    },
    {
        name: "CV",
        href: "https://cv.claramauro.fr/CV_Clara_Mauro-Gioan.pdf",
        externalLink: true,
    },
];
