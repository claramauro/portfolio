import Link from "next/link";

export default function ButtonLink({
    children,
    path,
    externalLink,
    style = "default",
    className,
}: {
    children: React.ReactNode;
    path: string;
    externalLink: boolean;
    style?: "default" | "outline";
    className?: string;
}) {
    let classname = `${style === "outline" ? "btn btn--outline" : "btn"}`;
    if (className) {
        classname += ` ${className}`;
    }

    return (
        <Link href={path} className={`text-center ${classname}`} target={externalLink ? "_blank" : "_self"}>
            {children}
        </Link>
    );
}
