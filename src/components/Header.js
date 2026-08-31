import styles from "../styles/header.module.css";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()
  const user = useSelector((store) => store.userdetails);

  const handlesignout = () => {
   
    signOut(auth).then(() => {
      navigate("/")

      
 
}).catch((error) => {
  
});
  };

  return (
    <div className={styles.header}>
      <div>
        <img
          className={styles.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
        />
      </div>

      <div className={styles.userSection}>
        <span className={styles.userName}>
          {user?.displayName || "User"}
        </span>

        <img
          className={styles.userIcon}
          src={
            user?.photoURL ||
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          }
          alt="User"
        />

        <button className={styles.signOutBtn} onClick={handlesignout}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;