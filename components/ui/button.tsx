import Image from "next/image";

export default function Button({
    text,
    style = "default",
    icon,
}: {
    text: string;
    style?: "default" | "outline";
    icon?: string;
}) {
    return (
        <button type="button" className={style === "outline" ? "btn btn--outline" : "btn"}>
            {icon ? (
                <div className="flex flex-row gap-2">
                    {text}
                    {icon && <Image src={icon} alt="" width={20} height={20} />}
                </div>
            ) : (
                text
            )}
        </button>
    );
}
