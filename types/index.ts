export type IMovie = {
    poster_path: string
    backdrop_path?: string
    title: string
    id: number
    release_date?: string
    vote_average: number
    overview?: string
}

export type IIcon = {
    color: string
    width?: number
    height?: number
}