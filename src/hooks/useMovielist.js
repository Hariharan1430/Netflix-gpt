import { MOVIE_DATA } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addnewmovies } from '../utils/movieslice'
import { useEffect } from 'react'

const useMovielist=()=>{
    
      const dispatch=useDispatch();

 
  const getnowmoviedata=async ()=>{
       const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', MOVIE_DATA)
       const json=await data.json()

     //   console.log(json.results)
       dispatch(addnewmovies(json.results))


  }
 
  useEffect(()=>{
       getnowmoviedata()
  },[])
}

export default useMovielist;