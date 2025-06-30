"use client";

import ButtonLink from "@/src/components/ui/buttonLink";
import Carrousel from "@/src/components/ui/carrousel";
import AccessibilitySkill from "@/src/components/ui/skills/accessibility";
import ApiSkill from "@/src/components/ui/skills/api";
import BootstrapSkill from "@/src/components/ui/skills/bootstrap";
import CssSkill from "@/src/components/ui/skills/css";
import DockerSkill from "@/src/components/ui/skills/docker";
import EjsSkill from "@/src/components/ui/skills/ejs";
import ExpressSkill from "@/src/components/ui/skills/express";
import FigmaSkill from "@/src/components/ui/skills/figma";
import GitSkill from "@/src/components/ui/skills/git";
import HtmlSkill from "@/src/components/ui/skills/html";
import JavascriptSkill from "@/src/components/ui/skills/javascript";
import NextSkill from "@/src/components/ui/skills/next";
import NodeSkill from "@/src/components/ui/skills/node";
import ReactSkill from "@/src/components/ui/skills/react";
import ResponsiveSkill from "@/src/components/ui/skills/responsive";
import SassSkill from "@/src/components/ui/skills/sass";
import SequelizeSkill from "@/src/components/ui/skills/sequelize";
import SqlSkill from "@/src/components/ui/skills/sql";
import TailwindSkill from "@/src/components/ui/skills/tailwind";
import TestSkill from "@/src/components/ui/skills/test";
import TypescriptSkill from "@/src/components/ui/skills/typescript";
import { useThemeContext } from "@/src/contexts/theme";
import Image from "next/image";

const projectsImages = {
    petFosterConnect: ["pfc/home.png", "pfc/search.png", "pfc/tableau-de-bord.png", "pfc/demandes.png"],
    ocoffee: ["ocoffee/home.png", "ocoffee/catalogue.png", "ocoffee/admin.png", "ocoffee/admin-product.png"],
    cleriam: ["cleriam/top.png", "cleriam/contact.png"],
};

export default function Projects() {
    const { theme } = useThemeContext();
    const isDarkMode = theme === "dark" ? true : false;

    return (
        <div className="container">
            <h3 className="font-bold text-2xl mt-10">Mes projets</h3>
            <div className="mt-5">
                <p>
                    Voici les principaux projets réalisés au cours de mon apprentissage (autodidacte et formation) et de
                    mes expériences.
                </p>
                <p>
                    Chacun d’eux m’a permis de mettre en pratique mes compétences techniques et/ou d’expérimenter
                    différentes technologies.
                </p>
            </div>
            <div className="flex flex-row mt-10 gap-2">
                <a
                    className="size-7 dark:size-8"
                    href="https://github.com/claramauro"
                    target="__blank"
                    title="Page GitHub">
                    <Image src="/icons/github.svg" alt="" width={32} height={32} />
                </a>
                <a
                    className="size-7 dark:size-8"
                    href="https://www.linkedin.com/in/clara-mauro-gioan/"
                    target="__blank"
                    title="Profil LinkedIn">
                    <Image src="/icons/linkedin.svg" alt="" width={32} height={32} />
                </a>
            </div>
            <div className="mt-15">
                <div className="card card--project mb-10 p-8 lg:p-10 lg:pr-12 shadow-sm">
                    <h4 className="font-bold mb-4 text-lg">Mon portfolio</h4>
                    <p className="mb-2">
                        La réalisation de ce site m’a permis de mettre en application les connaissances récemment
                        acquises en autodidacte sur Next.js.
                    </p>
                    <p className="mb-2">
                        J’y ai utilisé le rendu statique (Static Site Generation) afin d’optimiser les performances et
                        le temps de chargement.
                    </p>
                    <ul className="list-inside list-disc mb-4">
                        <li>Réalisation des maquettes</li>
                        <li>Intégration</li>
                        <li>Développement front-end</li>
                        <li>Déploiement</li>
                    </ul>
                    <div className="mb-4">
                        <h5 className="underline underline-offset-6 mb-4">Stack technique :</h5>
                        <ul className="mt-2 grid gap-y-2 place-items-start md:place-items-center grid-cols-[repeat(auto-fit,minmax(140px,1fr))]">
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <HtmlSkill />
                            </li>
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <CssSkill />
                            </li>
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <TypescriptSkill />
                            </li>
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <NextSkill isDarkMode={isDarkMode} />
                            </li>
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <TailwindSkill />
                            </li>
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <ResponsiveSkill isDarkMode={isDarkMode} />
                            </li>

                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <AccessibilitySkill isDarkMode={isDarkMode} />
                            </li>
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <FigmaSkill />
                            </li>
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <GitSkill />
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4 mt-10">
                        <ButtonLink
                            path="https://github.com/claramauro/portfolio"
                            style="outline"
                            className="w-full max-w-70">
                            Voir repository GitHub
                        </ButtonLink>
                    </div>
                </div>
                <div className="card card--project mb-10 p-8 lg:p-10 lg:pr-12 shadow-sm">
                    <h4 className="font-bold mb-4 text-lg">Olympeis - Cahier de laboratoire numérique</h4>
                    <p className="mb-2">
                        Un cahier de laboratoire numérique est une application qui remplace le cahier de laboratoire
                        papier pour consigner, organiser et partager les protocoles, résultats et données scientifiques
                        tout en assurant leur traçabilité.
                    </p>
                    <p className="mb-2">
                        Cette application est développée par l&apos;entreprise Informatics for Bio-Companies, dans
                        laquelle j&apos;ai effectué un stage de trois mois. J&apos;ai participé au développement de cet
                        outil à son lancement.
                    </p>
                    <ul className="list-inside list-disc mb-4">
                        <li>Intégration</li>
                        <li>Développement full stack</li>
                        <li>Réalisation de tests unitaires</li>
                        <li>Participation aux estimations</li>
                    </ul>
                    <div className="mb-4">
                        <h5 className="underline underline-offset-6 mb-2">Fonctionnalités principales :</h5>
                        <ul className="list-inside list-disc">
                            <li>Inscription, connexion, gestion des rôles et permissions</li>
                            <li>Création et gestion de projets, expérimentations, tâches</li>
                            <li>Gestion des stocks</li>
                            <li>Génération de PDF</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h5 className="underline underline-offset-6 mb-4">Stack technique :</h5>
                        <ul className="mt-2 grid gap-y-2 place-items-start md:place-items-center grid-cols-[repeat(auto-fit,minmax(140px,1fr))]">
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <HtmlSkill />
                            </li>
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <SassSkill />
                            </li>
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <TypescriptSkill />
                            </li>
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <ReactSkill />
                            </li>
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <NodeSkill />
                            </li>
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <ApiSkill isDarkMode={isDarkMode} />
                            </li>
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <ExpressSkill isDarkMode={isDarkMode} />
                            </li>
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <SqlSkill text="MySQL" />
                            </li>
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <TestSkill isDarkMode={isDarkMode} />
                            </li>
                            <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                <GitSkill />
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4 mt-10">
                        <ButtonLink path="https://infobioco.com/eln-olympeis/" className="w-full max-w-70">
                            Voir le site
                        </ButtonLink>
                    </div>
                </div>
                <div className="card card--project mb-10 p-8 lg:p-10 lg:pr-12 shadow-sm flex flex-col lg:flex-row items-stretch gap-10 lg:max-xl:gap-12">
                    <div className="lg:w-[60%]">
                        <h4 className="font-bold mb-4 text-lg">Pet Foster Connect</h4>
                        <p className="mb-2">
                            Application web visant à mettre en relation des associations de protection animale et des
                            familles souhaitant accueillir temporairement un animal avant son adoption définitive.
                        </p>
                        <p className="mb-2">
                            Cette application web est le projet de fin de formation que j&apos;ai réalisée avec trois
                            autres développeurs de ma promotion, pendant un mois :
                        </p>
                        <ul className="list-inside list-disc mb-4">
                            <li>Réalisation d&apos;un MVP</li>
                            <li>Cahier des charges, User stories</li>
                            <li>Wireframes et maquettes</li>
                            <li>Modélisation de la base de données</li>
                            <li>Développement full stack</li>
                            <li>Déploiement</li>
                        </ul>
                        <div className="mb-4">
                            <h5 className="underline underline-offset-6 mb-2">Fonctionnalités principales :</h5>
                            <ul className="list-inside list-disc">
                                <li>
                                    Affichage de la liste des animaux et associations disponibles sur
                                    l&apos;application, avec ajout de filtres de recherche.
                                </li>
                                <li>Inscription, connexion, mot de passe oublié (JWT)</li>
                                <li>Back office pour les associations</li>
                                <li>Envoi de demandes par email, gestion de profil</li>
                                <li>Responsive design</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h5 className="underline underline-offset-6 mb-4">Stack technique :</h5>
                            <ul className="mt-2 grid gap-y-2 place-items-start md:place-items-center grid-cols-[repeat(auto-fit,minmax(140px,1fr))]">
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <HtmlSkill />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <SassSkill />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <FigmaSkill />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <ResponsiveSkill isDarkMode={isDarkMode} />
                                </li>

                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <TypescriptSkill />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <ReactSkill />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <BootstrapSkill />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <NodeSkill />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <ApiSkill isDarkMode={isDarkMode} />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <ExpressSkill isDarkMode={isDarkMode} />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <SqlSkill text="PostgreSQL" />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center text-center">
                                    <SequelizeSkill text={"Sequelize"} />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <DockerSkill />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <GitSkill />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-[40%]">
                        <Carrousel images={projectsImages.petFosterConnect} />
                        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4 mt-20">
                            <ButtonLink path="https://petfoster.claramauro.fr/" className="w-full max-w-70">
                                Voir le site
                            </ButtonLink>
                            <ButtonLink
                                path="https://github.com/claramauro/Pet-Foster-Connect-front"
                                style="outline"
                                className="w-full max-w-70">
                                Voir le repository GitHub (Front)
                            </ButtonLink>
                            <ButtonLink
                                path="https://github.com/claramauro/Pet-Foster-Connect-back"
                                style="outline"
                                className="w-full max-w-70">
                                Voir le repository GitHub (Back)
                            </ButtonLink>
                        </div>
                    </div>
                </div>
                <div className="card card--project mb-10 p-8 lg:p-10 lg:pr-12 shadow-sm flex flex-col lg:flex-row items-stretch gap-10 lg:max-xl:gap-12">
                    <div className="lg:w-[60%]">
                        <h4 className="font-bold mb-4 text-lg">oCoffee</h4>
                        <p className="mb-2">
                            Site vitrine conçu pour une boutique fictive de café, avec un catalogue des produits et une
                            interface d&apos;administration sécurisée pour la gestion des produits (opérations CRUD).
                        </p>
                        <p className="mb-2">
                            Cette application web est un projet réalisé seule en cours de formation, à laquelle
                            j&apos;ai ajouté d&apos;autres fonctionnalités par la suite :
                        </p>
                        <ul className="list-inside list-disc mb-4">
                            <li>Réalisation d&apos;un site à partir d&apos;une demande (fictive) d&apos;un client</li>
                            <li>Intégration à partir de wireframes</li>
                            <li>Modélisation de la base de données</li>
                            <li>Développement full stack</li>
                            <li>Déploiement</li>
                        </ul>
                        <div className="mb-4">
                            <h5 className="underline underline-offset-6 mb-2">Fonctionnalités principales:</h5>
                            <ul className="list-inside list-disc">
                                <li>Affichage des produits avec filtres par catégorie</li>
                                <li>Partie back-office administrateur (avec authentification)</li>
                                <li>Responsive design</li>
                                <li>Accessibilité</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h5 className="underline underline-offset-6 mb-4">Stack technique :</h5>
                            <ul className="mt-2 grid gap-y-2 place-items-start md:place-items-center grid-cols-[repeat(auto-fit,minmax(140px,1fr))]">
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <HtmlSkill />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <CssSkill />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <JavascriptSkill />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <ResponsiveSkill isDarkMode={isDarkMode} />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <AccessibilitySkill isDarkMode={isDarkMode} />
                                </li>

                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <NodeSkill />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <ExpressSkill isDarkMode={isDarkMode} />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center text-center">
                                    <EjsSkill />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <SqlSkill text="PostgreSQL" />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <GitSkill />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-[40%]">
                        <Carrousel images={projectsImages.ocoffee} />
                        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4 mt-20">
                            <ButtonLink path="https://ocoffee.claramauro.fr/" className="w-full max-w-64">
                                Voir le site
                            </ButtonLink>
                            <ButtonLink
                                path="https://github.com/claramauro/ocoffee"
                                style="outline"
                                className="w-full max-w-64">
                                Voir le repository GitHub
                            </ButtonLink>
                        </div>
                    </div>
                </div>
                <div className="card card--project p-8 lg:p-10 lg:pr-12 shadow-sm flex flex-col lg:flex-row items-stretch gap-10 lg:max-xl:gap-12">
                    <div className="lg:w-[60%]">
                        <h4 className="font-bold mb-4 text-lg">Cleriam</h4>
                        <p className="mb-2">
                            Page web de présentation d&apos;une activité BtoB, développée pour un client, sous la
                            responsabilité d&apos;un développeur freelance.
                        </p>
                        <ul className="list-inside list-disc mb-4">
                            <li>Création de la maquette sur Figma avec échanges client</li>
                            <li>Intégration</li>
                            <li>Responsive design et accessibilité</li>
                            <li>
                                JavaScript Vanilla pour les interactions dynamiques (menu de navigation, modale, etc.)
                            </li>
                            <li>Formulaire de contact géré avec Formspree</li>
                        </ul>
                        <div className="mb-4">
                            <h5 className="underline underline-offset-6 mb-4">Stack technique :</h5>
                            <ul className="mt-2 grid gap-y-2 place-items-start md:place-items-center grid-cols-[repeat(auto-fit,minmax(140px,1fr))]">
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <HtmlSkill />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <SassSkill />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <JavascriptSkill />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <ResponsiveSkill isDarkMode={isDarkMode} />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <AccessibilitySkill isDarkMode={isDarkMode} />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <FigmaSkill />
                                </li>
                                <li className="flex flex-row gap-x-2 md:flex-col items-center justify-center">
                                    <GitSkill />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-[40%]">
                        <Carrousel images={projectsImages.cleriam} />
                        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4 mt-20">
                            <ButtonLink path="https://cleriam.com/" className="w-full max-w-64">
                                Voir le site
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
