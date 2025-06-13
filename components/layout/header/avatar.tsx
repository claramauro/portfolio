"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Avatar() {
    const imgContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const avatarElement = imgContainer.current;
            if (!avatarElement) {
                return;
            }

            const scrollValue = window.scrollY;
            const initialAvatarPosition = 115;
            const minAvatarPosition = 48;
            const scrollMax = initialAvatarPosition - minAvatarPosition;

            const initialAvatarSize = 64;
            const minAvatarSize = 40;
            let scale: number = 1;
            const minScale = minAvatarSize / initialAvatarSize;

            if (scrollValue >= scrollMax) {
                scale = minScale;
                avatarElement.classList.remove("absolute", "bottom-0", "left-0");
                avatarElement.classList.add("avatar-fixed");
            } else if (scrollValue === 0) {
                scale = 1;
            } else {
                const scaleDiff = 1 - minScale;
                const scaleValue = (scrollValue * scaleDiff) / scrollMax;
                scale = 1 - scaleValue;
                avatarElement.classList.add("absolute", "bottom-0", "left-0");
                avatarElement.classList.remove("avatar-fixed");
            }
            avatarElement.style.transform = `scale(${scale})`;
        };
        window.addEventListener("scroll", handleScroll);

        //mettre à jour l'état dès le chargement de la page selon le scroll
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={imgContainer}
            className="rounded-full border-3 border-custom-green w-16 h-16 box-shadow absolute bottom-0 left-0 origin-top-left z-50">
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
