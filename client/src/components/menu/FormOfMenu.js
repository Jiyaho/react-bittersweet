import styles from "css/App.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function FormOfMenu({ menuName, idx, imgsrc, imgalt }) {
  return (
    <div className={styles.menu_div}>
      <li>
        <Link to={`/menu-detail/${idx}`}>
          <img src={imgsrc} alt={imgalt} />
        </Link>
      </li>
      <span>{menuName}</span>
    </div>
  );
}

FormOfMenu.propTypes = {
  idx: PropTypes.string.isRequired,
  menuName: PropTypes.string.isRequired,
};

export default FormOfMenu;
