import GalleryImg from "@/components/ui/gallery-img/gallery-img";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <p className="mt-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, quaerat soluta? Et ex optio error sed
                quia doloribus vel magnam? Nostrum, tempora? Accusantium molestias voluptates itaque obcaecati
                praesentium adipisci delectus! Doloribus, nihil aut! Numquam sit eveniet consequatur saepe? A ducimus ex
                molestiae ipsum, dolorem vitae aspernatur amet accusantium saepe officia, explicabo cumque voluptatibus
                dolorum in dignissimos, deleniti ad hic iste. Nobis similique placeat mollitia labore nisi veritatis
                exercitationem consectetur nulla earum esse veniam omnis, amet sed magni autem, quasi rerum quaerat
                error ratione incidunt doloribus! Sequi fugiat nam officiis ratione! Distinctio aut nesciunt ex ducimus
                consectetur fugiat possimus accusamus natus numquam! Ex error, sed quisquam impedit quasi commodi
                repellendus magni quo voluptate, magnam deserunt cum minima. Impedit eum dolorem velit! Blanditiis
                dolores tempora similique, impedit quia vel ipsum, repellat dolorem quis libero provident ullam optio
                facere quam? Nostrum, nulla nesciunt vel, beatae rerum, repellendus non temporibus repellat laudantium
                fugiat quod? Et impedit fugiat beatae adipisci porro aperiam debitis! Totam quis architecto obcaecati
                debitis ipsum iure autem illum tenetur illo distinctio? Ad vero quae mollitia veniam, aspernatur eveniet
                deleniti dolor alias?
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
            <GalleryImg />
            <div className="mt-10">
                <h3 className="font-bold text-2xl">Compétences</h3>
                <div className="border border-slate-200 p-6">
                    <h4 className="font-bold">Front-end</h4>
                    <ul className="flex flex-wrap gap-4">
                        <li className="flex items-center justify-start w-[calc(50%-0.5rem)] gap-4">
                            <Image src="/icons/html.svg" alt="" width={32} height={32} />
                            <span>HTML 5</span>
                        </li>
                        <li className="flex items-center justify-start w-[calc(50%-0.5rem)] gap-4">
                            <Image src="/icons/css.svg" alt="" width={32} height={32} className="scale-125" />
                            <span>CSS 3</span>
                        </li>
                        <li className="flex items-center justify-start w-[calc(50%-0.5rem)] gap-4">
                            <Image src="/icons/javascript.svg" alt="" width={32} height={32} />
                            <span>JavaScript</span>
                        </li>
                        <li className="flex items-center justify-start w-[calc(50%-0.5rem)] gap-4">
                            <Image src="/icons/typescript.svg" alt="" width={32} height={32} />
                            <span>TypeScript</span>
                        </li>
                    </ul>
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, numquam ipsa! Est quam,
                    inventore accusantium fugit hic mollitia nihil quasi aut ratione, dolorem aperiam recusandae commodi
                    error nesciunt omnis libero? Cupiditate excepturi aliquam veritatis minima eaque quidem quo qui
                    dignissimos sapiente obcaecati officia pariatur, corrupti, expedita, dolorem dolores aliquid! Facere
                    impedit animi molestias magnam velit itaque dignissimos distinctio at rerum. Maxime sint harum
                    quaerat ratione quis voluptate possimus, totam magnam doloremque qui praesentium similique corporis
                    magni officia tenetur porro illum accusamus rerum reprehenderit labore recusandae cupiditate cum.
                    Reiciendis, ea quae. Nulla aspernatur adipisci mollitia voluptatibus. Facilis, eveniet! Aliquam
                    excepturi quis itaque dignissimos id doloremque eligendi iusto eaque, hic dolor repudiandae ex dicta
                    aspernatur, rerum accusamus ad? Cupiditate obcaecati perferendis adipisci. Saepe eveniet nesciunt
                    natus nisi maiores, ea numquam vitae incidunt doloribus ut beatae rerum sed? Laboriosam neque aut
                    nulla autem officia impedit expedita nemo ipsam, ratione, cum iure dolorem tenetur! Architecto dicta
                    ea inventore unde, quibusdam recusandae accusamus aperiam doloribus animi. Nobis recusandae ex
                    maiores mollitia id impedit excepturi facilis accusantium blanditiis cupiditate, eveniet asperiores
                    iure labore, unde, voluptatum aspernatur. Quas dignissimos laudantium ex voluptate quaerat, sunt
                    nemo vero voluptates libero ipsam vel sequi minus veniam commodi mollitia enim. Voluptatibus, ipsa
                    mollitia. Nisi reprehenderit assumenda impedit ut quisquam adipisci minus?
                </p>
            </div>
        </>
    );
}
