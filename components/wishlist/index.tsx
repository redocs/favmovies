import React from "react";
import { IMovie } from "@/types";
import { Card } from "@/components/card";

type Props = {
    movies: IMovie[]
};

export const Wishlist: React.FC<Props> = ({ movies }) => {

    return (
        <div className="space-y-6">
            <div>
                <div className="max-w-4xl w-full grid grid-cols-4 gap-7">
                    {movies.map((movie: IMovie) => {
                        // console.log({ movie })
                        return <Card {...{ poster_path: movie.poster_path, backdrop_path: movie.backdrop_path, title: movie.title, id: movie.id, vote_average: movie.vote_average, release_date: movie.release_date }} key={movie.id} />
                    })}
                </div>
            </div>
        </div>
    );
};