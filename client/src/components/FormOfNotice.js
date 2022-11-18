import styles from "css/App.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function FormOfNotice({ idx, _id, title, date, writer, view }) {
  return (
    <tbody>
      <tr>
        <td>{idx}</td>
        <td className={styles.td_content}>
          {/* <Link to={`/notice-detail/${_id}`}>{title}</Link> */}
          <Link to={`/notice-detail/`}>{title}</Link>
        </td>
        <td>{writer}</td>
        <td>{date}</td>
        <td>{view}</td>
      </tr>
    </tbody>
  );
}

FormOfNotice.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
};

export default FormOfNotice;
