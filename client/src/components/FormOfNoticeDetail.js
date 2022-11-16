import styles from "css/App.module.css";
import PropTypes from "prop-types";

function FormOfNoticeDetail({ header, content, date }) {
  return (
    <section className={styles.noticeDetail}>
      <header>
        <ul>
          <li className={styles.detailHeader}>{header}</li>
          <li className={styles.detailDate}>{date}</li>
        </ul>
      </header>
      <article>
        <p>{content}</p>
      </article>
    </section>
  );
}

FormOfNoticeDetail.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default FormOfNoticeDetail;
