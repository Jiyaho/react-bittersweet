import styles from "css/App.module.css";
import history from "images/history.jpg";

function History() {
  return (
    <div>
      <div className={styles.about_article1}>
        <h2>HISTORY</h2>
        <h3>커피에 언제나 진심이었던 비터스윗은 성장하고 있습니다.</h3>
        <img src={history} alt="history" />
      </div>
    </div>
  );
}

export default History;
