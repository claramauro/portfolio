import Image from "next/image";

export default function HtmlSkill() {
    return (
        <>
            <Image src="/icons/html.svg" alt="icône HTML" width={32} height={32} className="scale-[1.1]" />
            <span>HTML 5</span>
        </>
    );
}
