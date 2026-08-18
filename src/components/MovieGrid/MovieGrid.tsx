import css from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie";

interface MovieGridProps {
    movies: Movie[]
    // onSelect: () => void
}
export default function MovieGrid({ movies }: MovieGridProps) {
    
    const handleClick = () => {

// console.log(onSelect);

        // onSelect(key)
    }
console.log(movies);
    
    return (
        <ul className={css.grid}>
            {movies.map((movie: Movie) => (
        <li key={movie.id}>
                <div className={css.card}>
                    <img
                        className={css.image}
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                            loading="lazy"
                            onClick={handleClick}
                    />
                    <h2 className={css.title}>{movie.title}</h2>
                </div>
                </li>
              ))} 
    </ul>
)}