import axios from "axios";
// import MovieList from "../movieGrid/MovieGrid";
// import type Movie from "../../types/movie";

const myKey = import.meta.env.VITE_API_KEY;

// query: string
export const FetchMovies = (query: string) => {
    const  data: Promise<void>  = axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
            query: query
        },
        headers: {
            Authorization: `Bearer ${myKey}`
        }
    })
        .then(result => {
            console.log(result);
           return console.log(data);
            
        
        })
        .catch(err => {
        console.log(err);
        
    })
    
}
