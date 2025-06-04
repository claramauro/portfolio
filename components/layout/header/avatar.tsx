"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Avatar() {
    const imgContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imgContainer.current) {
                return;
            }
            const scrollPosition = window.scrollY;
            if (scrollPosition > 128 - 40) {
                // 128 - 40 = hauteur header - padding top container
                imgContainer.current.classList.add("fixed left-4 sm:left-16 lg:left-28");
                return;
            }
            let scale: number = 1;
            if (scrollPosition > 0) {
                const scrollProgressRatio = parseFloat(((scrollPosition * (40 / 64)) / 128).toFixed(2));
                scale = 1 - scrollProgressRatio;
            }
            imgContainer.current.style.transform = `scale(${scale})`;
            imgContainer.current.style.left = "0px";
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={imgContainer}
            className="rounded-full border border-white border-3 w-16 h-16 box-shadow absolute bottom-0 left-0 origin-left">
            <Image
                src="/avatar-img.jpg"
                alt="Clara Mauro-Gioan"
                width={600}
                height={712}
                className="w-full h-full object-cover rounded-full"
            />
        </div>
    );
}
