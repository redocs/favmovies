"use client"
import Image from "next/image";
import Link from "next/link";
import { IMovie } from "@/types"
import { useState } from "react"
import { IconStar } from "@/components/icons/star"
import { retrieveYear } from "@/lib/utils";

export const Card: React.FC<IMovie> = ({ poster_path, backdrop_path, title, id, vote_average, release_date }) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    return <Link
        href={`/movie/${id}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-48 relative">
        <div className="aspect-[2/3] relative">
            {isHovered && <div>
                <div className="absolute bottom-0 z-20 flex w-full justify-between p-3 py-1">
                    {vote_average && <div className="justify-center items-center inline-flex">
                        <IconStar color="#F6C725" />
                        <div className="text-white text-base font-bold font-roboto pl-1">{vote_average.toFixed(1)}</div>
                    </div>}
                    {release_date && <div className="text-white text-base font-bold font-roboto">{retrieveYear(release_date)}</div>}
                </div>
                <div className="absolute z-10 bg-gradient-to-b from-black/35 to-black/75 inset-0 rounded-[10px]"></div>
                {backdrop_path && <Image
                    className="w-full rounded-[10px] object-cover absolute inset-0 h-full"
                    src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                    width={180}
                    height={270}
                    alt={title}
                />}
            </div>}
            <Image
                className="w-full rounded-[10px] object-cover"
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                width={180}
                height={270}
                alt={title}
            />
        </div>
        <h3 className="text-center text-black text-base font-normal font-roboto leading-none mt-3">
            {title}
        </h3>
    </Link>
}