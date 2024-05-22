"use client"
import { useEffect, useState } from "react"
import { IMovie } from "@/types"
import { handleFavoriteClick } from "@/lib/utils"
import ls from "localStorage"

export const AddToWishlist: React.FC<IMovie> = ({ poster_path, title, vote_average, release_date, overview, id }) => {

    const [isInWishlist, setIsInWishlist] = useState<boolean>(false)
    const [loaded, setLoaded] = useState<boolean>(true)

    const handleClick = ({ poster_path, title, vote_average, release_date, overview, id }: IMovie) => {
        handleFavoriteClick({ poster_path, title, vote_average, release_date, overview, id });
        const savedMovies: IMovie[] = JSON.parse(ls.getItem('favoriteMovies') || '[]')
        setIsInWishlist(savedMovies.some((savedMovie) => savedMovie.id === id))
    }

    useEffect(() => {
        const savedMovies: IMovie[] = JSON.parse(ls.getItem('favoriteMovies') || '[]')
        setIsInWishlist(savedMovies.some((savedMovie) => savedMovie.id === id))
        setLoaded(false)
    }, [id])

    if (loaded) {
        return null
    }

    return (
        <button className={`inline-flex ${isInWishlist ? 'bg-rose-500' : 'bg-yellow-500'} rounded-[30px] p-3 px-10`} onClick={() => handleClick({ poster_path, title, vote_average, release_date, overview, id })}>
            <span className="text-center text-white text-xl font-bold font-roboto tracking-tight">{isInWishlist ? 'Remove from Favourites' : 'Add To Favourites'}</span>
        </button>
    );
}
