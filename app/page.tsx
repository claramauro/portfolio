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
                    className="w-7 h-7"
                    href="https://www.linkedin.com/in/clara-mauro-gioan/"
                    target="__blank"
                    title="Profil LinkedIn">
                    <Image src="/icons/linkedin.svg" alt="" width={28} height={28} />
                </a>
                <a className="w-7 h-7" href="https://github.com/claramauro" target="__blank" title="Page GitHub">
                    <Image src="/icons/github.svg" alt="" width={28} height={28} />
                </a>
            </div>
        </>
    );
}
