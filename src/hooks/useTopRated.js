import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { MOVIE_DATA } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieslice";

const useTopRated=()=>{
    const dispatch=useDispatch();

    const getTopRatedMovies= async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', MOVIE_DATA)
        const json=await data.json()
        dispatch(addTopRatedMovies(json.results))

    }
    useEffect(()=>{
       getTopRatedMovies()
    },[])
}

export default useTopRated;