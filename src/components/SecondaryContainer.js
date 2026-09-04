import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'
import styles from "../styles/secondarycontainer.module.css";


const SecondaryContainer = () => {
  const movielist = useSelector((store) => store.movies);

  if (!movielist) return ;

  return (
    <div className={styles.secondaryContainer}>
      <Movielist
        title="Now Playing"
        moviecardata={movielist.newmovies}
      />
      <Movielist
        title="Top Rated"
        moviecardata={movielist.toprated}
      />
       <Movielist
        title="Popular Movies"
        moviecardata={movielist.popularmovies}
      />
 
      <Movielist
        title="Upcoming"
        moviecardata={movielist.upcomming}
      />
       
    </div>
  );
};

export default SecondaryContainer;