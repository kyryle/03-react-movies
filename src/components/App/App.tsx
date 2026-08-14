import css from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { FetchMovies } from "../../services/movieService";
import MovieList from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../../MovieModal/MovieModal";
import { Toaster } from "react-hot-toast";

const no = false

export default function App() {
  const handleSearch = (query: string) => {
    console.log(query);
    FetchMovies(query)
    
  }

  
  return (
    <div className={css.App}>
      <SearchBar onSearch={handleSearch} />
      <MovieList />
      <Loader />
      <ErrorMessage />
      {no &&<><MovieModal/></>}
      <Toaster/>
    </div>
)}
