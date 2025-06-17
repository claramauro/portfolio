export default function ChevronUpIcon({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <svg
            className={`size-5 transition-transform group-hover:-translate-y-0.5 ${
                isDarkMode ? "text-white" : "text-black"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path d="m18 15-6-6-6 6" />
        </svg>
    );
}
