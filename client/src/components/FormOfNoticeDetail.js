import styles from "css/App.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function FormOfNoticeDetail({ title, writer, content, date }) {
  const navigate = useNavigate();

  return (
    <section className={styles.noticeDetail}>
      <header>
        <ul>
          <li className={styles.detailTitle}>{title}</li>
          <li className={styles.detailWriter}>{writer}</li>
          <li className={styles.detailDate}>{date}</li>
        </ul>
      </header>
      <article>
        <p>{content}</p>
      </article>
      <div className={styles.noticeDetailBtnWrap}>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          목록
        </button>
        <button
          className={styles.noticeDetail_updateBtn}
          onClick={() => {
            navigate(-1);
          }}
        >
          수정
        </button>
      </div>
    </section>
  );
}

FormOfNoticeDetail.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default FormOfNoticeDetail;
