import Link from "next/link";

export default function ButtonLink({
    children,
    path,
    style = "default",
    className,
}: {
    children: React.ReactNode;
    path: string;
    style?: "default" | "outline";
    className?: string;
}) {
    let classname = `${style === "outline" ? "btn btn--outline" : "btn"}`;
    if (className) {
        classname += ` ${className}`;
    }

    return (
        <Link href={path} className={`text-center ${classname}`}>
            {children}
        </Link>
    );
}
