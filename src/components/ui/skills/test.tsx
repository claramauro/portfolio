import TestJsIcon from "../icons/testJs";

export default function TestSkill({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <>
            <TestJsIcon isDarkMode={isDarkMode} />
            <span>Tests unitaires</span>
        </>
    );
}
