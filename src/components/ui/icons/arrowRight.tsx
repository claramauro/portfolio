export function ArrowRightIcon({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <svg
            className={`size-5 ${isDarkMode ? "text-white" : "text-black"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4 12H20M20 12L16 8M20 12L16 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
