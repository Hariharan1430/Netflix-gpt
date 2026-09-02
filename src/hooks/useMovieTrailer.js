import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { BG_VIDEO_DATA } from '../utils/constants';
import { addtrailervideo } from '../utils/movieslice';

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();

  const getvideodata = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US",
      BG_VIDEO_DATA,
    );
    const json = await data.json();
    console.log(json);

    const moviedata = json.results.filter((e) => e.type === "Trailer");
    const onemoviedata = moviedata.length ? moviedata[0] : json.results[0];
    console.log(onemoviedata);
    dispatch(addtrailervideo(onemoviedata))
  
  };

  useEffect(() => {
    getvideodata();
  }, []);

}

export default useMovieTrailer