import Image from "next/image";

export default function GalleryImg() {
    return (
        <div className="mt-10 flex flex-row justify-center items-center gap-x-6 overflow-hidden py-2 -mx-7 sm:-mx-8 lg:-mx-12">
            <div className="flex-none relative w-44 h-52 sm:w-72 sm:h-80">
                <Image
                    className="rounded-2xl object-cover"
                    src="/mains-ordi.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 640px) 19rem, 11rem"
                />
            </div>
            <div className="flex-none relative w-44 h-52 sm:w-72 sm:h-80">
                <Image
                    className="rounded-2xl object-cover"
                    src="/citation.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 640px) 19rem, 11rem"
                />
            </div>
            <div className="flex-none relative w-44 h-52 sm:w-72 sm:h-80">
                <Image
                    className="rounded-2xl rotate-2 object-cover"
                    src="/code.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 640px) 19rem, 11rem"
                />
            </div>
            <div className="flex-none relative w-44 h-52 sm:w-72 sm:h-80">
                <Image
                    className="rounded-2xl object-cover"
                    src="/team.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 640px) 19rem, 11rem"
                />
            </div>
            <div className="flex-none relative w-44 h-52 sm:w-72 sm:h-80">
                <Image
                    className="rounded-2xl rotate-2 object-cover"
                    src="/coffee.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 640px) 19rem, 11rem"
                />
            </div>
        </div>
    );
}
