import React from 'react'
import { CDN_URL } from '../utils/constants'
import styles from "../styles/moviecard.module.css";


const MovieCard = ({ moviecardurl }) => {
  return (
    <div className={styles.movieCard}>
      <img
        className={styles.moviePoster}
        src={CDN_URL + moviecardurl}
        alt="Movie"
      />
    </div>
  );
};

export default MovieCard;