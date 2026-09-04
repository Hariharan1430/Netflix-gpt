import { useSelector } from "react-redux";
import styles from "../styles/gptsuggestions.module.css";
import language from "../utils/languageconstants";

const GptSuggestions = () => {
    const langvalue=useSelector((e)=>e.language.lang)
  return (
    <div className={styles.suggestions}>
     {language[langvalue].suggestions}
    </div>
  );
};

export default GptSuggestions;