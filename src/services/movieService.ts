import axios from "axios";
import type {Movie} from "../types/movie";

const myKey = import.meta.env.VITE_API_KEY;

// interface dataPromise {
//     data: {
//         results: Movie[]
//     }
// }

// query: string
// : Promise<void>
export const fetchMovies = async (query: string): Promise<Movie[] | undefined> => {
    try {
    const  result  = await axios.get("https://api.themoviedb.org/3/search/movie", {
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
