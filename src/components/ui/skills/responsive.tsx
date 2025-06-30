import ResponsiveDesignIcon from "../icons/responsiveDesign";

export default function ResponsiveSkill({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <>
            <ResponsiveDesignIcon isDarkMode={isDarkMode} />
            <span>Responsive Design</span>
        </>
    );
}
