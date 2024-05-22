import Image from "next/image"
import { IMovie } from "@/types"
import { AddToWishlist } from "@/components/buttons/addwishlist"
import { convertDate } from "@/lib/utils"
import { IconCalendar, IconStar } from "@/components/icons"

export const Movie: React.FC<IMovie> = ({ poster_path, title, vote_average, release_date, overview, id }) => {
    return <div className="max-w-4xl w-full flex gap-12">
        <Image
            className="w-[262px] h-[393px]"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            width={262}
            height={393}
            alt={title}
        />
        <div>
            <h1 className="text-black text-4xl font-bold font-roboto tracking-wide mb-6">{title}</h1>
            <div className="flex gap-4 mb-4">
                {vote_average && <div className="flex items-center gap-1"><IconStar color="#F6C725" /><div className="text-zinc-400 text-base font-bold font-roboto">{vote_average.toFixed(1)}</div></div>}
                {release_date && <div className="flex items-center gap-1"><IconCalendar color="#F6C725" /><div className="text-zinc-400 text-base font-bold font-roboto">{convertDate(release_date)}</div></div>}
            </div>
            <div className="mb-9 text-stone-500 text-lg font-normal font-roboto leading-relaxed">{overview}</div>
            <AddToWishlist {...{ poster_path, title, id, vote_average, release_date }} />
        </div>
    </div>
}