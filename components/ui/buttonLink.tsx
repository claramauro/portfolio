import Image from "next/image";
import Link from "next/link";

export default function ButtonLink({
    text,
    path,
    style = "default",
    icon,
    className,
}: {
    text: string;
    path: string;
    style?: "default" | "outline";
    icon?: string;
    className?: string;
}) {
    let classname = `${style === "outline" ? "btn btn--outline border-custom-blue" : "btn bg-custom-blue"}`;
    if (className) {
        classname += ` ${className}`;
    }

    return (
        <Link href={path} className={`text-center ${classname}`}>
            {icon ? (
                <div className="flex flex-row justify-center items-center gap-2">
                    {text}
                    {icon && <Image src={icon} alt="" width={20} height={20} />}
                </div>
            ) : (
                text
            )}
        </Link>
    );
}
