"use client";

import { ArrowRightIcon } from "@/src/components/ui/icons/arrowRight";
import ButtonLink from "../components/ui/buttonLink";
import GalleryImg from "../components/ui/gallery-img";
import Image from "next/image";
import { useThemeContext } from "../contexts/theme";
import HtmlSkill from "../components/ui/skills/html";
import CssSkill from "../components/ui/skills/css";
import JavascriptSkill from "../components/ui/skills/javascript";
import TypescriptSkill from "../components/ui/skills/typescript";
import ReactSkill from "../components/ui/skills/react";
import NextSkill from "../components/ui/skills/next";
import BootstrapSkill from "../components/ui/skills/bootstrap";
import TailwindSkill from "../components/ui/skills/tailwind";
import SassSkill from "../components/ui/skills/sass";
import ResponsiveSkill from "../components/ui/skills/responsive";
import NodeSkill from "../components/ui/skills/node";
import ExpressSkill from "../components/ui/skills/express";
import ApiSkill from "../components/ui/skills/api";
import SqlSkill from "../components/ui/skills/sql";
import SequelizeSkill from "../components/ui/skills/sequelize";
import TestSkill from "../components/ui/skills/test";
import EjsSkill from "../components/ui/skills/ejs";
import GitSkill from "../components/ui/skills/git";
import DockerSkill from "../components/ui/skills/docker";
import AccessibilitySkill from "../components/ui/skills/accessibility";
import FigmaSkill from "../components/ui/skills/figma";

export default function Home() {
    const { theme } = useThemeContext();
    const isDarkMode = theme === "dark" ? true : false;

    return (
        <>
            <div className="container">
                <h3 className="font-bold text-2xl mt-10">Présentation</h3>
                <div className="mt-5">
                    <p>{"< Hello World ! />"}</p>
                    <p>
                        Après plusieurs années dans le domaine de la santé en tant qu&apos;infirmière, j’ai choisi de me
                        reconvertir dans le développement. J’ai rapidement pris goût au développement web lors de mes
                        débuts en autodidacte, ce qui m’a conduite à intégrer une formation pour compléter mon
                        apprentissage.
                    </p>
                    <p>
                        À la clé, un titre professionnel de développeuse web et web mobile et de nouvelles compétences !
                    </p>
                    <p>
                        Curieuse, rigoureuse et toujours prête à apprendre, je recherche aujourd’hui un poste de
                        développeuse web.
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
            </div>
            <GalleryImg />
            <div className="container">
                <div className="mt-10">
                    <h3 className="font-bold text-2xl">Compétences</h3>
                    <div className="mt-10 flex flex-row flex-wrap gap-6 justify-center">
                        <div className="card w-full max-w-96 md:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)]">
                            <h4 className="font-bold mb-4">Front-end</h4>
                            <ul className="flex flex-wrap gap-4">
                                <li className="flex items-center justify-start max-[360px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <HtmlSkill />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <CssSkill />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <JavascriptSkill />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <TypescriptSkill />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <ReactSkill />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <NextSkill isDarkMode={isDarkMode} />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <BootstrapSkill />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <TailwindSkill />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <SassSkill />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <ResponsiveSkill isDarkMode={isDarkMode} />
                                </li>
                            </ul>
                        </div>
                        <div className="card w-full max-w-96 md:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)]">
                            <h4 className="font-bold mb-4">Back-end</h4>
                            <ul className="flex flex-wrap gap-4">
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <NodeSkill />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <TypescriptSkill />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <ExpressSkill isDarkMode={isDarkMode} />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <ApiSkill isDarkMode={isDarkMode} />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <SqlSkill text="SQL - NoSQL" />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <SequelizeSkill text={"ORM (Sequelize)"} />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <TestSkill isDarkMode={isDarkMode} />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <EjsSkill />
                                </li>
                            </ul>
                        </div>
                        <div className="card w-full max-w-96 md:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)]">
                            <h4 className="font-bold mb-4">Divers</h4>
                            <ul className="flex flex-wrap gap-4">
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <GitSkill />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <DockerSkill />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <AccessibilitySkill isDarkMode={isDarkMode} />
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <FigmaSkill />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-20 flex flex-col justify-center items-center md:flex-row md:flex-wrap xl:justify-start gap-4">
                        <ButtonLink
                            path="https://cv.claramauro.fr/CV_Clara_Mauro-Gioan.pdf"
                            externalLink={true}
                            className="w-full max-w-64">
                            Télécharger mon CV
                        </ButtonLink>
                        <ButtonLink path="/projects" externalLink={false} style="outline" className="w-full max-w-64">
                            <div className="flex flex-row justify-center items-center gap-2">
                                Découvrir mes projets
                                <ArrowRightIcon isDarkMode={isDarkMode} />
                            </div>
                        </ButtonLink>
                    </div>
                </div>
            </div>
        </>
    );
}
