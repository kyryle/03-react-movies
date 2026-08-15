import css from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie";

interface MovieGridProps {
    movies: Movie[]
}
export default function MovieGrid({ movies }: MovieGridProps) {
console.log(movies);
    
    return (
        <ul className={css.grid}>
            {movies.map((movie: Movie) => (
        <li>
                <div className={css.card}>
                    <img
                        className={css.image}
                        src={movie.poster_path}
                        alt={movie.title}
                        loading="lazy"
                    />
                    <h2 className={css.title}>{movie.title}</h2>
                </div>
                </li>
              ))} 
    </ul>
)}