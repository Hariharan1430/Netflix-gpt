import styles from "../styles/backgroundvideocontainer.module.css";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const BackgroundVideoContainer = ({ movie_id }) => {
  const trailer = useSelector((store) => store.movies?.newtrailer);

  useMovieTrailer(movie_id);

  return (
    <div className={styles.videoContainer}>
      <iframe
        className={styles.videoFrame}
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?autoplay=1&mute=1&loop=1&playlist=" +
          trailer?.key +
          "&controls=0&showinfo=0&modestbranding=1"
        }
        title="Trailer"
        allow="autoplay; encrypted-media"
      ></iframe>

      <div className={styles.overlay}></div>
    </div>
  );
};

export default BackgroundVideoContainer;