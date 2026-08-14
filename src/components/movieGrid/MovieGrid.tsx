import css from "./MovieGrid.module.css";
// { movies }
export default function MovieList() {
    return (
        <ul className={css.grid}>
            {/* {movies.map((movie) => ( */}
        <li>
                <div className={css.card}>
                    <img
                        className={css.image}
                        src="https://image.tmdb.org/t/p/w500/poster-path"
                        alt="movie title"
                        loading="lazy"
                    />
                    <h2 className={css.title}>Movie title</h2>
                </div>
                </li>
            {/* ))} */}
    </ul>
)}