import styles from "../styles/bgtitle.module.css";

const BackgroundVideoTitleContainer = ({ title, overview }) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{title}</h1>

      <p className={styles.overview}>{overview}</p>

      <div className={styles.buttonContainer}>
        <button className={styles.playButton}>▶ Play</button>
        <button className={styles.infoButton}>ⓘ More Info</button>
      </div>
    </div>
  );
};

export default BackgroundVideoTitleContainer;