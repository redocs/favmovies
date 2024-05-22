import { IMovie } from "@/types"
import ls from "localStorage"

export function handleFavoriteClick(movie: IMovie) {
    const savedMovies: IMovie[] = JSON.parse(ls.getItem('favoriteMovies') || '[]');
    const isMovieInFavorites = savedMovies.some((savedMovie) => savedMovie.id === movie.id);

    if (isMovieInFavorites) {
        const updatedMovies = savedMovies.filter((savedMovie) => savedMovie.id !== movie.id);
        ls.setItem('favoriteMovies', JSON.stringify(updatedMovies));
    } else {
        const newMovies = [...savedMovies, movie];
        ls.setItem('favoriteMovies', JSON.stringify(newMovies));
    }
}

export function retrieveYear(date: string) {
    const year = new Date(date).getFullYear();
    return year
}

export function convertDate(date: string) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [yeat, month, day] = date.split('-');
    const dateOutput = `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${yeat}`;

    return dateOutput
}