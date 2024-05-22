"use client";
import React, { useEffect, useState } from "react";
import { IMovie } from "@/types";
import { Card } from "@/components/card";

type Props = {
    movies: IMovie[]
    page: number
};

export const ListWrapper: React.FC<Props> = ({ movies, page }) => {
    const [list, setList] = useState<IMovie[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        setList(movies);
        setCurrentPage(page);
    }, [movies, page]);

    const fetchMoreMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=a74169393e0da3cfbc2c58c5feec63d7&page=${currentPage + 1}`);
        const data = await response.json();
        setList((prevMovies) => [...prevMovies, ...data.results]);
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return (
        <div className="space-y-6">
            <div>
                <div className="max-w-4xl w-full grid grid-cols-4 gap-7">
                    {list.map((movie: IMovie) => {
                        console.log({ movie })
                        return <Card {...{ poster_path: movie.poster_path, backdrop_path: movie.backdrop_path, title: movie.title, id: movie.id, vote_average: movie.vote_average, release_date: movie.release_date }} key={movie.id} />
                    })}
                </div>

                <div className="w-full m-auto flex justify-center my-5">
                    <button onClick={fetchMoreMovies} className="bg-stone-50 rounded-[60px] shadow border border-black/opacity-10 p-3 px-12">
                        <div className="text-center text-black text-base font-medium font-['Roboto'] tracking-tight">Load More</div>
                    </button>
                </div>
            </div>
        </div>
    );
};