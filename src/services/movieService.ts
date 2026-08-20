import axios from "axios";
import type {Movie} from "../types/movie";

const myKey = import.meta.env.VITE_API_KEY;

interface Response {
    results: Movie[]
}

export const fetchMovies = async (query: string): Promise<Movie[] | []> => {
    try {
    const  result  = await axios.get<Response>("https://api.themoviedb.org/3/search/movie", {
        params: {
            query: query
        },
        headers: {
            Authorization: `Bearer ${myKey}`
        }
    })
            console.log(result.data.results);
            
            return result.data.results
    } catch (err) {
        alert(err)
        return []
            }
        
}
