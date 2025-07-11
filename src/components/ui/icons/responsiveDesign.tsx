export default function ResponsiveDesignIcon({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <svg
            className={`size-8`}
            width="800px"
            height="800px"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_901_2601)">
                <path
                    d="M1 10V1.995C1 1.442 1.447 1 2 1H30C30.553 1 31 1.442 31 1.995V18M21 30.998L18 29.995V25H22M22 21H18M31 30C31 30.553 30.553 31 30 31H26C25.447 31 25 30.553 25 30V22C25 21.447 25.447 21 26 21H30C30.553 21 31 21.447 31 22V30ZM15 30C15 30.553 14.553 31 14 31H2C1.447 31 1 30.553 1 30V14C1 13.447 1.447 13 2 13H14C14.553 13 15 13.447 15 14V30Z"
                    stroke={`${isDarkMode ? "#FFF" : "#000"}`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_901_2601">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
