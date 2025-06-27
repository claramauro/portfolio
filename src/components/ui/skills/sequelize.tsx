import Image from "next/image";

export default function SequelizeSkill({ text }: { text: string }) {
    return (
        <>
            <Image src="/icons/sequelize.svg" alt="" width={32} height={32} className="scale-[1.1]" />
            <span>{text}</span>
        </>
    );
}
