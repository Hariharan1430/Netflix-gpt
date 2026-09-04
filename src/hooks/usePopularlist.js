import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { MOVIE_DATA } from "../utils/constants";
import { addPopularmovielist } from "../utils/movieslice";

const usePopularlist=()=>{
    const dispatch=useDispatch();

    const getPopularmovielist=async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', MOVIE_DATA);
        const json=await data.json();
        dispatch(addPopularmovielist(json.results))
        

    }
    useEffect(()=>{
         getPopularmovielist();
    },[])
}

export default usePopularlist;