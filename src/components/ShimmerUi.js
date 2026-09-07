import styles from "../styles/shimmerui.module.css";

const ShimmerUi = () => {
  return (
    <div className={styles.container}>
      {[1, 2, 3].map((section) => (
        <div key={section} className={styles.section}>
          <div className={styles.title}></div>

          <div className={styles.movies}>
            {[1, 2, 3, 4, 5].map((movie) => (
              <div key={movie} className={styles.card}></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUi;