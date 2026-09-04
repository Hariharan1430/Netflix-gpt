import { Language } from "firebase/ai";
import styles from "../styles/gptsearchbar.module.css";
import language from "../utils/languageconstants";
import { useSelector } from "react-redux";

const GptSearchbar = () => {
    const langvalue=useSelector((e)=>e.language.lang)
  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder={language[langvalue].placeholder}
        className={styles.input}
      />

      <button className={styles.button}>
       {language[langvalue].search}
      </button>
    </form>
  );
};

export default GptSearchbar;