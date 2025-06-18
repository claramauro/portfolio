"use client";

import { ArrowRightIcon } from "@/src/components/ui/icons/arrowRight";
import ButtonLink from "../components/ui/buttonLink";
import GalleryImg from "../components/ui/gallery-img";
import Image from "next/image";
import NextJsIcon from "@/src/components/ui/icons/nextjs";
import ResponsiveDesignIcon from "@/src/components/ui/icons/responsiveDesign";
import ExpressIcon from "@/src/components/ui/icons/express";
import AccessibilityIcon from "@/src/components/ui/icons/accessibilityIcon";
import ApiIcon from "@/src/components/ui/icons/api";
import TestJsIcon from "@/src/components/ui/icons/testJs";
import { useThemeContext } from "../contexts/theme";

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
                                    <Image
                                        src="/icons/html.svg"
                                        alt=""
                                        width={32}
                                        height={32}
                                        className="scale-[1.1]"
                                    />
                                    <span>HTML 5</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <Image src="/icons/css.svg" alt="" width={32} height={32} className="scale-[1.1]" />
                                    <span>CSS 3</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <Image src="/icons/javascript.svg" alt="" width={32} height={32} />
                                    <span>JavaScript</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <Image src="/icons/typescript.svg" alt="" width={32} height={32} />
                                    <span>TypeScript</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <Image src="/icons/react.svg" alt="" width={32} height={32} />
                                    <span>React</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <NextJsIcon isDarkMode={isDarkMode} />
                                    <span>Next.js</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <Image src="/icons/bootstrap.svg" alt="" width={32} height={32} />
                                    <span>Bootstrap</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <Image src="/icons/tailwind.svg" alt="" width={32} height={32} />
                                    <span>Tailwind</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <Image src="/icons/sass-square.svg" alt="" width={32} height={32} />
                                    <span>Sass</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-3">
                                    <ResponsiveDesignIcon isDarkMode={isDarkMode} />
                                    <span>Responsive Design</span>
                                </li>
                            </ul>
                        </div>
                        <div className="card w-full max-w-96 md:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)]">
                            <h4 className="font-bold mb-4">Back-end</h4>
                            <ul className="flex flex-wrap gap-4">
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <Image src="/icons/node.svg" alt="" width={32} height={32} />
                                    <span>Node.js</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <Image src="/icons/typescript.svg" alt="" width={32} height={32} />
                                    <span>Typescript</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <ExpressIcon isDarkMode={isDarkMode} />
                                    <span>Express</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <ApiIcon isDarkMode={isDarkMode} />
                                    <span>API</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <Image src="/icons/database.svg" alt="" width={32} height={32} />
                                    <span>SQL - NoSQL</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <Image
                                        src="/icons/sequelize.svg"
                                        alt=""
                                        width={32}
                                        height={32}
                                        className="scale-[1.1]"
                                    />
                                    <span>ORM (Sequelize)</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <TestJsIcon isDarkMode={isDarkMode} />
                                    <span>Tests unitaires</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <Image src="/icons/ejs.svg" alt="" width={32} height={32} className="scale-[1.1]" />
                                    <span>EJS</span>
                                </li>
                            </ul>
                        </div>
                        <div className="card w-full max-w-96 md:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)]">
                            <h4 className="font-bold mb-4">Divers</h4>
                            <ul className="flex flex-wrap gap-4">
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <Image src="/icons/git.svg" alt="" width={32} height={32} />
                                    <span>Git</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <Image src="/icons/docker.svg" alt="" width={32} height={32} />
                                    <span>Docker</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <AccessibilityIcon isDarkMode={isDarkMode} />
                                    <span>Accessibilité</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <Image src="/icons/figma.svg" alt="" width={32} height={32} />
                                    <span>Figma</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-20 flex flex-col justify-center items-center md:flex-row md:flex-wrap xl:justify-start gap-4">
                        <ButtonLink path="/cv" className="w-full max-w-60">
                            Télécharger mon CV
                        </ButtonLink>
                        <ButtonLink path="/projects" style="outline" className="w-full max-w-60">
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
