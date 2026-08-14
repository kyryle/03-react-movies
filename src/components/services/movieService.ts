import axios from "axios";
// import MovieList from "../movieGrid/MovieGrid";
// import type Movie from "../../types/movie";

const myKey = import.meta.env.VITE_API_KEY;


export const FetchMovies = (query: string) => {
    const  data  = axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
            query: query
        },
        headers: {
            Authorization: `Bearer ${myKey}`
        }
    })
        .then(result => {
        console.log(result);
        
        })
        .catch(err => {
        console.log(err);
        
    })
    
}


// export default function handleForm(formData: FormData)  {
//   const query = formData.get("query") as string
// }