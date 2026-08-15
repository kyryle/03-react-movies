import axios from "axios";
import type {Movie} from "../types/movie";

const myKey = import.meta.env.VITE_API_KEY;

// query: string
// : Promise<void>
export const FetchMovies = (query: string) => {
    const  data: Movie  = axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
            query: query
        },
        headers: {
            Authorization: `Bearer ${myKey}`
        }
    })
        .then(result => {
            console.log(result.data.results);
            const movies = result.data.results
           return movies
            
        
        })
        .catch(err => {
        alert(err);
        
    })
    
}
