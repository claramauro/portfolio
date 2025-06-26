import Image from "next/image";

export default function ButtonCarrousel({ direction }: { direction: "right" | "left" }) {
    return (
        <button
            type="button"
            aria-label={direction === "left" ? "Image précédente" : "Image suivante"}
            className="bg-white border border-gray-400 rounded-full p-1 hover:scale-105 opacity-70">
            <Image src={`/icons/chevron-${direction}.svg`} alt="" aria-hidden="true" width={24} height={24} />
        </button>
    );
}
