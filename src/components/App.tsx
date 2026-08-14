import css from './App.module.css'
import SearchBar from './searchBar/SearchBar'
import { FetchMovies } from "./services/movieService";
import MovieList from "./movieGrid/MovieGrid";
import Loader from "./loader/Loader";
import ErrorMessage from "./errorMessage/ErrorMessage";
import MovieModal from "./movieModal/MovieModal";
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
      <FetchMovies />
      <MovieList />
      <Loader />
      <ErrorMessage />
      {no &&<><MovieModal/></>}
      <Toaster/>
    </div>
)}
