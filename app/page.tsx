import ButtonLink from "../components/ui/buttonLink";
import GalleryImg from "../components/ui/gallery-img";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="container">
                <p className="mt-10">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, quaerat soluta? Et ex optio error
                    sed quia doloribus vel magnam? Nostrum, tempora? Accusantium molestias voluptates itaque obcaecati
                    praesentium adipisci delectus! Doloribus, nihil aut! Numquam sit eveniet consequatur saepe? A
                    ducimus ex molestiae ipsum, dolorem vitae aspernatur amet accusantium saepe officia, explicabo
                    cumque voluptatibus dolorum in dignissimos, deleniti ad hic iste. Nobis similique placeat mollitia
                    labore nisi veritatis exercitationem consectetur nulla earum esse veniam omnis, amet sed magni
                    autem, quasi rerum quaerat error ratione incidunt doloribus! Sequi fugiat nam officiis ratione!
                    Distinctio aut nesciunt ex ducimus consectetur fugiat possimus accusamus natus numquam! Ex error,
                    sed quisquam impedit quasi commodi repellendus magni quo voluptate, magnam deserunt cum minima.
                    Impedit eum dolorem velit! Blanditiis dolores tempora similique, impedit quia vel ipsum, repellat
                    dolorem quis libero provident ullam optio facere quam? Nostrum, nulla nesciunt vel, beatae rerum,
                    repellendus non temporibus repellat laudantium fugiat quod? Et impedit fugiat beatae adipisci porro
                    aperiam debitis! Totam quis architecto obcaecati debitis ipsum iure autem illum tenetur illo
                    distinctio? Ad vero quae mollitia veniam, aspernatur eveniet deleniti dolor alias?
                </p>
                <div className="flex flex-row mt-10 gap-2">
                    <a
                        className="size-7"
                        href="https://www.linkedin.com/in/clara-mauro-gioan/"
                        target="__blank"
                        title="Profil LinkedIn">
                        <Image src="/icons/linkedin.svg" alt="" width={28} height={28} />
                    </a>
                    <a className="size-7" href="https://github.com/claramauro" target="__blank" title="Page GitHub">
                        <Image src="/icons/github.svg" alt="" width={28} height={28} />
                    </a>
                </div>
            </div>
            <GalleryImg />
            <div className="container">
                <div className="mt-10">
                    <h3 className="font-bold text-2xl ">Compétences</h3>
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
                                    <Image src="/icons/next-js.svg" alt="" width={32} height={32} />
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
                                    <Image src="/icons/responsive.svg" alt="" width={32} height={32} />
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
                                    <Image src="/icons/express.svg" alt="" width={32} height={32} />
                                    <span>Express</span>
                                </li>
                                <li className="flex items-center justify-start max-[380px]:w-full w-[calc(50%-0.5rem)] gap-2">
                                    <Image src="/icons/api.svg" alt="" width={32} height={32} />
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
                                    <Image src="/icons/test-js.svg" alt="" width={32} height={32} />
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
                                    <Image src="/icons/accessibility.svg" alt="" width={32} height={32} />
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
                        <ButtonLink path="/cv" text="Télécharger mon CV" className="w-full max-w-60" />
                        <ButtonLink
                            path="/projects"
                            text="Découvrir mes projets"
                            style="outline"
                            icon="/icons/arrow-right.svg"
                            className="w-full max-w-60"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
