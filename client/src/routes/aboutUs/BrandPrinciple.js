import styles from "css/App.module.css";
import principle from "images/coffee01.jpg";

function BrandPrinciple() {
  return (
    <div>
      <div className={styles.about_article2}>
        <h2>BRAND PRINCIPLE</h2>
        <h3>비터스윗은 품질과 타협하지 않습니다.</h3>
        <ul>
          <li>
            비터스윗은 ‘품질과 타협하지 않는다’는 브랜드 원칙 아래 최고의 제품과
            서비스를 선보이기 위해 노력하고 있습니다.
          </li>
          <li>
            한 잔의 완벽한 커피를 만들기 위해 Seed to Cup을 모토로 생두 선정부터
            운송, 보관, 로스팅, 유통, 그리고 생산에 이르기까지
          </li>
          <li>
            전 과정을 철저히 관리하며, 매장의 모든 바리스타가 신선하고 좋은
            품질의 원두로 좋은 커피 경험을 제공하기 위해 노력하고 있습니다.
          </li>
        </ul>
        <img src={principle} alt="brand-principle" />
      </div>
    </div>
  );
}

export default BrandPrinciple;
