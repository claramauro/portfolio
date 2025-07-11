export default function ApiIcon({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <svg
            className={`size-8 ${isDarkMode ? "fill-white" : "fill-black"}`}
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 32 32"
            id="icon"
            xmlns="http://www.w3.org/2000/svg">
            <title>API</title>
            <path d="M8,9H4a2,2,0,0,0-2,2V23H4V18H8v5h2V11A2,2,0,0,0,8,9ZM4,16V11H8v5Z" transform="translate(0 0)" />
            <polygon points="22 11 25 11 25 21 22 21 22 23 30 23 30 21 27 21 27 11 30 11 30 9 22 9 22 11" />
            <path d="M14,23H12V9h6a2,2,0,0,1,2,2v5a2,2,0,0,1-2,2H14Zm0-7h4V11H14Z" transform="translate(0 0)" />
            <rect
                id="_Transparent_Rectangle_"
                data-name="&lt;Transparent Rectangle&gt;"
                fill="none"
                width="32"
                height="32"
            />
        </svg>
    );
}
