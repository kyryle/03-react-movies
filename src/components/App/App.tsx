import css from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { FetchMovies } from "../../services/movieService";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../MovieModal/MovieModal";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

const no = false

export default function App() {
  const [movies, setMovies] = useState([])
  const handleSearch = (query: string) => {
    console.log(query);
    FetchMovies(query)
    
  }

  
  return (
    <div className={css.App}>
      <SearchBar onSubmit={handleSearch} />
      <MovieGrid movies={movies}/>
      <Loader />
      <ErrorMessage />
      {no &&<><MovieModal/></>}
      <Toaster/>
    </div>
)}
