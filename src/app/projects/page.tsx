"use client";

import ButtonCarrousel from "@/src/components/ui/buttonCarrousel";
import ButtonLink from "@/src/components/ui/buttonLink";
import ApiSkill from "@/src/components/ui/skills/api";
import BootstrapSkill from "@/src/components/ui/skills/bootstrap";
import DockerSkill from "@/src/components/ui/skills/docker";
import ExpressSkill from "@/src/components/ui/skills/express";
import GitSkill from "@/src/components/ui/skills/git";
import HtmlSkill from "@/src/components/ui/skills/html";
import NodeSkill from "@/src/components/ui/skills/node";
import ReactSkill from "@/src/components/ui/skills/react";
import SassSkill from "@/src/components/ui/skills/sass";
import SequelizeSkill from "@/src/components/ui/skills/sequelize";
import SqlSkill from "@/src/components/ui/skills/sql";
import TypescriptSkill from "@/src/components/ui/skills/typescript";
import Image from "next/image";
import { useState } from "react";

const img = ["home.png", "search.png", "tableau-de-bord.png", "demandes.png"];

export default function Projects() {
    const [carrouselIndex, setCarrouselIndex] = useState(0);
    const [direction, setDirection] = useState<"prev" | "next">("next");
    const [leaving, setLeaving] = useState<number | null>(null);

    function handlePreviousImg() {
        setLeaving(carrouselIndex);
        setDirection("prev");
        setTimeout(() => {
            setCarrouselIndex((prevIndex) => (prevIndex === 0 ? img.length - 1 : prevIndex - 1)); // 3. changer l'image
            setLeaving(null); // Reset
        }, 300);
    }

    function handleNextImg() {
        setLeaving(carrouselIndex);
        setDirection("next");
        setTimeout(() => {
            setCarrouselIndex((prevIndex) => (prevIndex === img.length - 1 ? 0 : prevIndex + 1));
            setLeaving(null);
        }, 300);
    }

    return (
        <div className="container">
            <h3 className="font-bold text-2xl mt-10">Mes projets</h3>
            <div className="mt-5">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed mollitia soluta aut beatae, vel ducimus
                    sint ratione maiores accusantium optio incidunt rem dignissimos? Tempore placeat id sint quo fugiat
                    quaerat. Mollitia blanditiis possimus nam officia itaque neque expedita nihil eos debitis.
                    Similique, nesciunt fuga atque odio amet ea officia temporibus maxime. Aliquid itaque non quasi
                    necessitatibus saepe eveniet praesentium nisi? Deserunt similique pariatur perspiciatis error ad
                    consequuntur, voluptatum temporibus eaque impedit, facere, magni tempora consectetur repudiandae.
                    Tempore velit eligendi cumque voluptates nemo laborum, dolorum porro labore, voluptatum, quis earum
                    quos. Amet quos accusamus deserunt. Explicabo quod voluptates maiores inventore quibusdam animi iste
                    nemo exercitationem, eligendi rem iure neque suscipit molestias deserunt nesciunt dolorem
                    repellendus id? Ut, repudiandae. Aperiam, sapiente. Deleniti! Ex cupiditate enim dolorum quos amet
                    nisi tenetur culpa esse fugiat, rerum quae tempora numquam est, explicabo nemo vitae ratione ut
                    eaque ipsa. Laudantium id quod molestiae, itaque quas ipsum.
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
                <div className="card card--project flex items-stretch gap-4">
                    <div className="w-[60%]">
                        <h4 className="font-bold mb-4">Pet Foster Connect</h4>
                        <p className="mb-2">
                            Application web visant à mettre en relation des associations de protection animale et des
                            familles souhaitant accueillir temporairement un animal avant son adoption définitive.
                        </p>
                        <p className="mb-2">
                            Cette application web est le projet de fin de formation que j&apos;ai réalisé avec 3 autres
                            développeurs de ma promotion, pendant 1 mois :
                        </p>
                        <ul className="list-inside list-disc mb-4">
                            <li>Réalisation d&apos;un MVP</li>
                            <li>Cahier des charges, User stories</li>
                            <li>Wireframes et maquettes</li>
                            <li>Modélisation base de données</li>
                            <li>Développement full stack</li>
                            <li>Déploiement</li>
                        </ul>
                        <div className="mb-4">
                            <h5 className="underline underline-offset-6 mb-2">Fonctionnalités :</h5>
                            <ul className="list-inside list-disc">
                                <li>
                                    Affichage liste des animaux et associations disponibles sur l&apos;application, avec
                                    ajout de filtres de recherche.
                                </li>
                                <li>Inscription, connexion, mot de passe oublié (JWT)</li>
                                <li>Back office pour les associations</li>
                                <li>Envoi de demandes par email, gestion de profil</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h5 className="underline underline-offset-6 mb-3">Stack technique :</h5>
                            <ul className="mt-2 grid gap-y-2 place-items-center grid-cols-[repeat(auto-fit,minmax(96px,1fr))]">
                                <li className="flex flex-col items-center justify-center">
                                    <HtmlSkill />
                                </li>
                                <li className="flex flex-col items-center justify-center">
                                    <SassSkill />
                                </li>
                                <li className="flex flex-col items-center justify-center">
                                    <TypescriptSkill />
                                </li>
                                <li className="flex flex-col items-center justify-center">
                                    <ReactSkill />
                                </li>
                                <li className="flex flex-col items-center justify-center">
                                    <BootstrapSkill />
                                </li>
                                <li className="flex flex-col items-center justify-center">
                                    <NodeSkill />
                                </li>
                                <li className="flex flex-col items-center justify-center">
                                    <ApiSkill isDarkMode={false} />
                                </li>
                                <li className="flex flex-col items-center justify-center">
                                    <ExpressSkill isDarkMode={false} />
                                </li>
                                <li className="flex flex-col items-center justify-center">
                                    <SqlSkill text="PostgreSQL" />
                                </li>
                                <li className="flex flex-col items-center justify-center text-center">
                                    <SequelizeSkill />
                                </li>
                                <li className="flex flex-col items-center justify-center">
                                    <DockerSkill />
                                </li>
                                <li className="flex flex-col items-center justify-center">
                                    <GitSkill />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-[40%]">
                        <div className="relative mb-16">
                            <div className="relative w-full h-[400px] overflow-hidden">
                                <div className="absolute z-40 -left-6 top-1/2" onClick={handlePreviousImg}>
                                    <ButtonCarrousel direction="left" />
                                </div>
                                {img.map((image, index) => {
                                    const isCurrent = carrouselIndex === index;
                                    const isLeaving = leaving === index;

                                    let animClass = "";
                                    if (isCurrent && direction === "next") animClass += "animate-slide-in-from-right";
                                    if (isCurrent && direction === "prev") animClass += "animate-slide-in-from-left";
                                    if (isLeaving && direction === "next") animClass += "animate-slide-out-to-left";
                                    if (isLeaving && direction === "prev") animClass += "animate-slide-out-to-right";
                                    return (
                                        <div key={index} className="">
                                            <Image
                                                src={`/projects/pfc/${image}`}
                                                alt=""
                                                fill
                                                className={`${
                                                    isCurrent ? "carroussel__img--current" : ""
                                                } carroussel__img rounded-2xl object-cover object-top ${animClass}`}
                                            />
                                        </div>
                                    );
                                })}
                                <div className="absolute z-40 -right-6 top-1/2" onClick={handleNextImg}>
                                    <ButtonCarrousel direction="right" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 ">
                            <ButtonLink path="#" className="w-full max-w-64">
                                Voir le site
                            </ButtonLink>
                            <ButtonLink path="#" style="outline" className="w-full max-w-64">
                                Voir le repository GitHub
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
