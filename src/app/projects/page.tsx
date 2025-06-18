import ButtonLink from "@/src/components/ui/buttonLink";
import Image from "next/image";

export default function Projects() {
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
                <div className="card card--project flex items-stretch">
                    <div className="p-10 w-[60%]">
                        <h4 className="font-bold mb-4">Pet Foster Connect</h4>
                        <p className="mb-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cum obcaecati modi tenetur
                            earum pariatur eum veniam, ipsum assumenda temporibus odit quod dolores quas, facere
                            voluptates porro error minima necessitatibus. Natus quasi beatae consequuntur, adipisci
                            quibusdam quae veritatis assumenda molestiae error iste dolorum voluptatem reprehenderit
                            quidem iusto illum laboriosam. Enim nemo vel molestias exercitationem tenetur repellendus
                            libero optio sequi animi?
                        </p>
                        <p className="mb-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cum obcaecati modi tenetur
                            earum pariatur eum veniam, ipsum assumenda temporibus odit quod dolores quas, facere
                            voluptates porro error minima necessitatibus. Natus quasi beatae consequuntur, adipisci
                            quibusdam quae veritatis assumenda molestiae error iste dolorum voluptatem reprehenderit
                            quidem iusto illum laboriosam. Enim nemo vel molestias exercitationem tenetur repellendus
                            libero optio sequi animi?
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ab eum atque suscipit
                            odio at autem veniam rem distinctio, hic deserunt alias minus vel sunt, excepturi ducimus
                            dolorum explicabo ipsam!
                        </p>
                        <div className="mt-4">icone</div>
                        <div className="mt-4">
                            <ButtonLink path="#">Voir le site</ButtonLink>
                            <ButtonLink path="#" style="outline">
                                Voir le repository GitHub
                            </ButtonLink>
                        </div>
                    </div>
                    <div className="w-[40%] relative">
                        <div className="relative w-full h-full">
                            <Image src="/projects/pfc/home.png" alt="" fill className="object-cover object-top" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
