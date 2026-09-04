import GptSearchbar from "./GptSearchbar";
import GptSuggestions from "./GptSuggestions";
import styles from "../styles/gptsearch.module.css";

const GptSearch = () => {
    
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <GptSearchbar />
        <GptSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;