import NextJsIcon from "../icons/nextjs";

export default function NextSkill({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <>
            <NextJsIcon isDarkMode={isDarkMode} />
            <span>Next.js</span>
        </>
    );
}
