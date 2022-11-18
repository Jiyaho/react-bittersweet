import styles from "css/App.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function FormOfNotice({
  _id,
  no,
  title,
  titleValue,
  onClick,
  date,
  writer,
  view,
  viewValue,
}) {
  return (
    <tbody>
      <tr>
        <td>{no}</td>
        <td className={styles.td_content}>
          {/* <Link to={`/notice-detail/${_id}`} onClick={onClick}>
            {title}
          </Link> */}
          <Link to={`#`}>
            <button onClick={onClick} value={titleValue}>
              {title}
            </button>
          </Link>
        </td>
        <td>{writer}</td>
        <td>{date}</td>
        <td value={viewValue}>{view}</td>
      </tr>
    </tbody>
  );
}

FormOfNotice.propTypes = {
  title: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
};

export default FormOfNotice;
