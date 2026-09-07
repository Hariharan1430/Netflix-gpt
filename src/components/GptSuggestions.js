import { useSelector } from "react-redux";
import styles from "../styles/gptsuggestions.module.css";
import language from "../utils/languageconstants";
import Movielist from "./Movielist";
import ShimmerUi from "./ShimmerUi";

const GptSuggestions = () => {
  const { moviestitle, moviesdata, loading } = useSelector(
    (store) => store.gptsearch
  );

  if (loading) {
    return <ShimmerUi />;
  }

  if (!moviestitle) return null;

  return (
    <div className={styles.suggestions}>
      {moviestitle.map((movie, index) => (
        <Movielist
          key={movie}
          title={movie}
          moviecardata={moviesdata[index]}
        />
      ))}
    </div>
  );
};

export default GptSuggestions;
