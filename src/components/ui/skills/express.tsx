import ExpressIcon from "../icons/express";

export default function ExpressSkill({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <>
            <ExpressIcon isDarkMode={isDarkMode} />
            <span>Express</span>
        </>
    );
}
