import styles from "../styles/gptsearchbar.module.css";
import language from "../utils/languageconstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { ai } from "../utils/openai";
import { MOVIE_DATA } from "../utils/constants";
import { getgeminimovies, setLoading } from "../utils/gptsearchslice";

const GptSearchbar = () => {
  const inputvalue = useRef(null);
  const langvalue = useSelector((e) => e.language.lang);
  const dispatch = useDispatch();

  const getMovie = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieName)}&include_adult=false&language=en-US&page=1`,
      MOVIE_DATA,
    );

    const json = await data.json();

    return json.results;
  };

  const handleSubmit = async () => {
    dispatch(setLoading(true));

    try {
      const value = inputvalue.current.value;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `Suggest exactly 3 movies for: ${value}.
Return only the movie names separated by commas.`,
      });

      const movies = response.text.split(",").map((movie) => movie.trim());

      const moviePromises = movies.map((movie) => getMovie(movie));

      const tmdbResults = await Promise.all(moviePromises);

      console.log(tmdbResults);

      dispatch(
        getgeminimovies({
          movietitle: movies,
          moviedata: tmdbResults,
        }),
      );
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input
        ref={inputvalue}
        type="text"
        placeholder={language[langvalue].placeholder}
        className={styles.input}
      />

      <button className={styles.button} onClick={handleSubmit}>
        {language[langvalue].search}
      </button>
    </form>
  );
};

export default GptSearchbar;
