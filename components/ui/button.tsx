import Image from "next/image";

export default function Button({
    text,
    style = "default",
    icon,
    className,
}: {
    text: string;
    style?: "default" | "outline";
    icon?: string;
    className?: string;
}) {
    let classname = `${style === "outline" ? "btn btn--outline" : "btn"}`;
    if (className) {
        classname += ` ${className}`;
    }

    return (
        <button type="button" className={classname}>
            {icon ? (
                <div className="flex flex-row justify-center items-center gap-2">
                    {text}
                    {icon && <Image src={icon} alt="" width={20} height={20} />}
                </div>
            ) : (
                text
            )}
        </button>
    );
}
