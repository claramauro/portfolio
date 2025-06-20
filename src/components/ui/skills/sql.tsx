import Image from "next/image";

export default function SqlSkill({ text }: { text: string }) {
    return (
        <>
            <Image src="/icons/database.svg" alt="" width={32} height={32} />
            <span>{text}</span>
        </>
    );
}
