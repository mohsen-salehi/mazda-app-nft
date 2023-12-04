import styles from "./style.module.css";
const index = () => {
  return (
    <div className={styles.marquee}>
      <div className={styles.marquee__inner} aria-hidden="true">
        <span className={styles.text_weekly_board}>Weekly</span>
        <span className={styles.text_weekly_board}>Leader</span>
        <span className={styles.text_weekly_board}>Board</span>
      </div>
    </div>
  );
};

export default index;
