import Image from "next/image";

export default function GalleryImg() {
    return (
        <div className="mt-10 flex flex-row justify-center items-center gap-x-6 overflow-hidden py-2 -mx-4 sm:-mx-8 lg:-mx-12">
            <div className="flex-none rotate-2">
                <Image
                    className="rounded-2xl"
                    src="https://picsum.photos/304/336?random=1"
                    alt=""
                    width={304}
                    height={336}
                />
            </div>
            <div className="flex-none">
                <Image
                    className="rounded-2xl"
                    src="https://picsum.photos/304/336?random=2"
                    alt=""
                    width={304}
                    height={336}
                />
            </div>
            <div className="flex-none">
                <Image
                    className="rounded-2xl  rotate-2"
                    src="https://picsum.photos/304/336?random=3"
                    alt=""
                    width={304}
                    height={336}
                />
            </div>
            <div className="flex-none">
                <Image
                    className="rounded-2xl"
                    src="https://picsum.photos/304/336?random=4"
                    alt=""
                    width={304}
                    height={336}
                />
            </div>
            <div className="flex-none">
                <Image
                    className="rounded-2xl  rotate-2"
                    src="https://picsum.photos/304/336?random=5"
                    alt=""
                    width={304}
                    height={336}
                />
            </div>
        </div>
    );
}
