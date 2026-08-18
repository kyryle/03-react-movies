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
  const [isOpen, setIsOpen] = useState(false)
  // const [movie, setMovie] = useState()


  const handleSearch = async (query: string) => {
    try {
      setIsError(false)
      setIsLoading(true)
      const data = await fetchMovies(query)
      setMovies(data ?? [])
    } catch (err) {
      setIsError(true)
      alert(err)
    } finally {
      setIsLoading(false)
      if (movies.length < 1) {
        toast.error("No movies found for your request.")
      }
    }
    // console.log(query);
    // console.log(setMovies);
    // fetchMovies(query)
    
  }
  // const handleImageClick = (key:string) => {
  //   setMovie(key)
  //   setIsOpen(true)
  // }
console.log(setIsOpen);

  
  return (
    <div className={css.App}>
      <SearchBar onSubmit={handleSearch} />
      {movies.length > 0 && <MovieGrid movies={movies}/>}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {isOpen && <><MovieModal/></>}
      <Toaster/>
    </div>
)}
