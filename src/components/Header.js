import styles from "../styles/header.module.css";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.userdetails);

  const handlesignout = () => {
   
    signOut(auth).then(() => {
      // navigate("/")

      
 
}).catch((error) => {
  
});
  };

  return (
    <div className={styles.header}>
      <div>
        <img
          className={styles.logo}
          src={LOGO}
          alt="Netflix"
        />
      </div>

      <div className={styles.userSection}>
  {/* <img
    className={styles.userIcon}
    src={
      user?.photoURL ||
      "https://occ-0-3647-3646.1.nflxso.net/art/55935/Netflix-avatar.png"
    }
    alt="Profile"
  /> */}

  <span className={styles.userName}>
    {user?.displayName || "Hari"}
  </span>

  <button className={styles.signOutBtn} onClick={handlesignout}>
    Sign Out
  </button>
</div>
    </div>
  );
};

export default Header;