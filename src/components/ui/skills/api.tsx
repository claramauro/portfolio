import ApiIcon from "../icons/api";

export default function ApiSkill({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <>
            <ApiIcon isDarkMode={isDarkMode} />
            <span>API</span>
        </>
    );
}
