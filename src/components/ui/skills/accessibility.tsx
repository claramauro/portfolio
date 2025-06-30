import AccessibilityIcon from "../icons/accessibilityIcon";

export default function AccessibilitySkill({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <>
            <AccessibilityIcon isDarkMode={isDarkMode} />
            <span>Accessibilité</span>
        </>
    );
}
