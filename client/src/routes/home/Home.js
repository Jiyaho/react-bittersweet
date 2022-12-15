import Nav from "components/Nav";
import Footer from "components/Footer";
import styles from "css/App.module.css";
import coldBrew from "images/iced-americano1.jpg";
import coffeeBean from "images/coffee-bean02.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import useScrollFadeIn from "hooks/useScrollFadeIn";
import ScrollBtn from "components/ScrollBtn";
import { Link } from "react-router-dom";

function Home() {
  const animatedItem = useScrollFadeIn();

  return (
    <div className={styles.wrap}>
      <Nav />
      <ScrollBtn />
      <div className={styles.new_menu}>
        <h1>NEW COLD BREW</h1>
        <ul>
          <li>Bittersweet 바리스타의 정성으로 탄생한,</li>
          <li>최상급 원두로 차가운 물로 14시간 동안 추출한 콜드 브루.</li>
          <li>깊은 풍미의 새로운 커피를 즐겨 보세요.</li>
        </ul>
        <img src={coldBrew} alt="cold-brew" />
      </div>
      <div className={styles.article2}>
        <p className={styles.article2_p} {...animatedItem}>
          Bittersweet의 다양한 프리미엄 원두, 원하는 원두를 선택해 주문하세요.
        </p>
        <img src={coffeeBean} alt="coffee-bean" />
      </div>
      <div className={styles.article3}>
        <FontAwesomeIcon icon={faDroplet} className={styles.article3_i} />
        <span>가까이 있는 Bittersweet 매장을 찾아보세요.</span>
        <Link to={`/store`}>
          <button>🔍 매장 검색하기</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
