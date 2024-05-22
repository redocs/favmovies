"use client"
import { useState, useEffect } from "react"
import { IMovie } from "@/types"
import { Wishlist } from "@/components/wishlist"
import { Header } from "@/components/header"
import ls from "localStorage"

export default function Home() {

    const [list, setList] = useState<IMovie[]>([])

    useEffect(() => {
        const savedMovies: IMovie[] = JSON.parse(ls.getItem('favoriteMovies') || '[]')
        setList(savedMovies)
    }, [])

    return (
        <main className="flex min-h-screen flex-col items-center">
            <Header />
            <Wishlist movies={list} />
        </main>
    );
}
