export default function ChevronDownIcon({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <svg
            className={`size-5 transition-transform group-hover:translate-y-0.5 ${
                isDarkMode ? "text-white" : "stroke-black"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}
