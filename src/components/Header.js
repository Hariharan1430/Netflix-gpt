import styles from "../styles/header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { gptsearch,searchvalue } from "../utils/gptsearchslice";
import { SUPPORTED_LANG } from "../utils/languageconstants";
import { setlangauge } from "../utils/languageslice";

const Header = () => {
  const dispatch = useDispatch();
  const gptserachvalue = useSelector((store) => store.gptsearch.search);
  const user = useSelector((store) => store.userdetails);
  const currentLanguage = useSelector((store) => store.language.lang);


  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        // navigate("/")
      })
      .catch((error) => {});
      dispatch(searchvalue())
  };

  const handleclick = () => {
    dispatch(gptsearch());
  };

  const selectlanguage = (e) => {
    dispatch(setlangauge(e.target.value));
  };
  return (
    <div className={styles.header}>
      <div>
        <img className={styles.logo} src={LOGO} alt="Netflix" />
      </div>

      <div className={styles.userSection}>
      
     {gptserachvalue &&  <select className={styles.signOutBtn} onChange={selectlanguage} value={currentLanguage}>
          {SUPPORTED_LANG.map((ret) => (
            <option key={ret.id} value={ret.id}>
              {ret.name}
            </option>
          ))}
        </select>}
       
        <button onClick={handleclick} className={styles.signOutBtn}>
          {!gptserachvalue ? "Gptserach" : "Home"}
        </button>
        <span className={styles.userName}>{user?.displayName || "Hari"}</span>

        <button className={styles.signOutBtn} onClick={handlesignout}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
