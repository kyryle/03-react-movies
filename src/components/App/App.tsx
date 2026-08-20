import css from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { fetchMovies } from "../../services/movieService";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../MovieModal/MovieModal";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import type {Movie} from "../../types/movie";


export default function App() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [movie, setMovie] = useState<Movie | null>(null)


  const handleSearch = async (query: string) => {
    try {
      setIsError(false)
      setIsLoading(true)
      const data = await fetchMovies(query)
      setMovies(data ?? [])
      if (data.length < 1) {
          toast.error('No movies found for your request.')
      }
    } catch (err) {
      setIsError(true)
      console.log(err);
    } finally {
      setIsLoading(false)
    }
    
  }
  const handleImageClick = (movie: Movie) => {
    setMovie(movie)
  }

  const handleClose = () => {
    setMovie(null)
  
  }

  
  return (
    <div className={css.App}>
      <SearchBar onSubmit={handleSearch} />
      {movies.length > 0 && <MovieGrid movies={movies} onSelect={handleImageClick} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {movie && <><MovieModal movie={movie} onClose={handleClose}/></>}
      <Toaster/>
    </div>
)}
