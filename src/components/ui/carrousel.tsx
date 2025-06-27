"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Carrousel({ images }: { images: string[] }) {
    const [carrouselIndex, setCarrouselIndex] = useState(0);
    const carrouselContainer = useRef<HTMLDivElement | null>(null);

    function handlePreviousImg() {
        if (!carrouselContainer.current) return;
        carrouselContainer.current.style.transform = `translateX(-${
            (carrouselIndex === 0 ? images.length - 1 : carrouselIndex - 1) * 100
        }%)`;
        setCarrouselIndex((prev) => (carrouselIndex === 0 ? images.length - 1 : prev - 1));
    }

    function handleNextImg() {
        if (!carrouselContainer.current) return;
        carrouselContainer.current.style.transform = `translateX(-${
            (carrouselIndex === images.length - 1 ? 0 : carrouselIndex + 1) * 100
        }%)`;
        setCarrouselIndex((prev) => (carrouselIndex === images.length - 1 ? 0 : prev + 1));
    }
    return (
        <div className="relative max-w-[400px] m-auto">
            <div className="absolute z-40 -left-6 sm:-left-8 top-1/2 -translate-y-1/2" onClick={handlePreviousImg}>
                <button
                    type="button"
                    aria-label="Image précédente"
                    className="bg-white border border-gray-400 rounded-full p-0.5 hover:scale-105 opacity-70">
                    <Image src={`/icons/chevron-left.svg`} alt="" aria-hidden="true" width={21} height={21} />
                </button>
            </div>
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" ref={carrouselContainer}>
                    {images.map((image, index) => (
                        <div className="relative w-full h-[400px] lg:max-xl:h-[300px] flex-none" key={index}>
                            <Image
                                src={`/projects/${image}`}
                                alt=""
                                fill
                                className={`rounded-2xl object-cover object-top`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute z-40 -right-6 sm:-right-8 top-1/2 -translate-y-1/2" onClick={handleNextImg}>
                <button
                    type="button"
                    aria-label="Image suivante"
                    className="bg-white border border-gray-400 rounded-full p-0.5 hover:scale-105 opacity-70">
                    <Image src={`/icons/chevron-right.svg`} alt="" aria-hidden="true" width={21} height={21} />
                </button>
            </div>
            <ol
                className="absolute z-40 flex items-center justify-center gap-1 -bottom-8 left-1/2 -translate-x-1/2"
                aria-label="Position dans le carrousel">
                {images.map((image, index) => (
                    <li
                        key={index}
                        className={`size-2 rounded-full flex-none ${
                            index === carrouselIndex ? "bg-custom-blue" : "bg-gray-400"
                        }`}></li>
                ))}
            </ol>
        </div>
    );
}
