import styles from "css/App.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function FormOfNotice({ idx, title, date, view }) {
  return (
    <tbody>
      <tr>
        <td>{idx}</td>
        <td className={styles.td_content}>
          <Link to={`/notice-detail/${idx}`}>{title}</Link>
        </td>
        <td>{date}</td>
        <td>{view}</td>
      </tr>
    </tbody>
  );
}

FormOfNotice.propTypes = {
  idx: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
};

export default FormOfNotice;
