import styles from "css/App.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function FormOfMenuDetail({
  temperature,
  menuName_ko,
  menuName_en,
  menuDesc,
  imgsrc,
  imgalt,
  열량,
  나트륨,
  포화지방,
  단백질,
  당류,
  카페인,
  cateBtn,
  cateBtnLinkTo,
}) {
  return (
    <div>
      <div className={styles.menuDetailLinkWrap}>
        <Link to={`/`} className={styles.menuDetailLink}>
          HOME
        </Link>
        <span> ► </span>
        <Link to={`/menu`} className={styles.menuDetailLink}>
          MENU
        </Link>
        <span> ► </span>
        <Link to={cateBtnLinkTo} className={styles.menuDetailLink}>
          {cateBtn}
        </Link>
      </div>
      <div className={styles.detail_section}>
        <div className={styles.detail_article1}>
          <ul>
            <li className={styles.menuTemp}>🌡️ {temperature}</li>
            <li className={styles.menuName_ko}>{menuName_ko}</li>
            <li className={styles.menuName_en}>{menuName_en}</li>
            <li className={styles.menuDesc}>{menuDesc}</li>
          </ul>
          <img src={imgsrc} alt={imgalt} />
        </div>
        <div className={styles.detail_article2}>
          <ul className={styles.detail_article2_ul1}>
            <li className={styles.menuSize}>제공량 (Size)</li>
            <li className={styles.menuSize_s}>스몰 (Small): 355ml</li>
            <li className={styles.menuSize_m}>미디엄 (Medium): 473ml</li>
            <li className={styles.menuSize_l}>라지 (Large): 591ml</li>
          </ul>
          <ul className={styles.detail_article2_ul2}>
            <li className={styles.nutrition_info1}>
              제품 영양 정보 (Nutritional information)
            </li>
            <li className={styles.nutrition_info2}>
              1회 제공량 기준: 355ml (Size: Small)
            </li>
          </ul>
          <div>
            <ul className={styles.detail_article2_ul3}>
              <li>열량 (kcal)</li>
              <li>나트륨 (mg)</li>
              <li>포화지방 (g)</li>
              <li>단백질 (g)</li>
              <li>당류 (g)</li>
              <li>카페인 (mg)</li>
            </ul>
            <ul className={styles.detail_article2_ul4}>
              <li>{열량}</li>
              <li>{나트륨}</li>
              <li>{포화지방}</li>
              <li>{단백질}</li>
              <li>{당류}</li>
              <li>{카페인}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

FormOfMenuDetail.propTypes = {
  menuCate: PropTypes.string.isRequired,
  currentMenu: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  menuName_ko: PropTypes.string.isRequired,
  menuName_en: PropTypes.string.isRequired,
  menuDesc: PropTypes.string.isRequired,
  열량: PropTypes.string.isRequired,
  나트륨: PropTypes.string.isRequired,
  포화지방: PropTypes.string.isRequired,
  단백질: PropTypes.string.isRequired,
  당류: PropTypes.string.isRequired,
  카페인: PropTypes.string.isRequired,
};

export default FormOfMenuDetail;
