import React from 'react'
import MovieCard from './MovieCard'
import styles from "../styles/movielist.module.css";



const Movielist = ({ title, moviecardata }) => {
  return (
    <div className={styles.movieList}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.movieRow}>
        {moviecardata?.map((movie) => (
          <MovieCard
            key={movie.id}
            moviecardurl={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default Movielist;