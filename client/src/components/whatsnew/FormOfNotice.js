import styles from "css/App.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function FormOfNotice({ _id, no, title, titleValue, onClick, date, writer }) {
  return (
    <tbody>
      <tr>
        <td>{no}</td>
        <td className={styles.notice_title}>
          <Link
            to={`/notice-detail/${_id}`}
            onClick={onClick}
            value={titleValue}
          >
            {title}
          </Link>
        </td>
        <td>{writer}</td>
        <td>{date}</td>
      </tr>
    </tbody>
  );
}

FormOfNotice.propTypes = {
  title: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
};

export default FormOfNotice;
