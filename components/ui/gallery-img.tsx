import Image from "next/image";

export default function GalleryImg() {
    return (
        <div className="mt-10 flex flex-row justify-center items-center gap-x-6 overflow-hidden py-2 -mx-4 sm:-mx-8 lg:-mx-12">
            <div className="flex-none relative w-44 h-52 sm:w-72 sm:h-80">
                <Image
                    className="rounded-2xl"
                    src="https://picsum.photos/304/336?random=1"
                    alt=""
                    fill
                    sizes="(min-width: 640px) 19rem, 11rem"
                />
            </div>
            <div className="flex-none relative w-44 h-52 sm:w-72 sm:h-80">
                <Image
                    className="rounded-2xl"
                    src="https://picsum.photos/304/336?random=2"
                    alt=""
                    fill
                    sizes="(min-width: 640px) 19rem, 11rem"
                />
            </div>
            <div className="flex-none relative w-44 h-52 sm:w-72 sm:h-80">
                <Image
                    className="rounded-2xl rotate-2"
                    src="https://picsum.photos/304/336?random=3"
                    alt=""
                    fill
                    sizes="(min-width: 640px) 19rem, 11rem"
                />
            </div>
            <div className="flex-none relative w-44 h-52 sm:w-72 sm:h-80">
                <Image
                    className="rounded-2xl"
                    src="https://picsum.photos/304/336?random=4"
                    alt=""
                    fill
                    sizes="(min-width: 640px) 19rem, 11rem"
                />
            </div>
            <div className="flex-none relative w-44 h-52 sm:w-72 sm:h-80">
                <Image
                    className="rounded-2xl rotate-2"
                    src="https://picsum.photos/304/336?random=5"
                    alt=""
                    fill
                    sizes="(min-width: 640px) 19rem, 11rem"
                />
            </div>
        </div>
    );
}
