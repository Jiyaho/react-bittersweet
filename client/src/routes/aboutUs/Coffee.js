import styles from 'css/App.module.css';
import coffeeBean1 from 'images/coffee-bean03.jpg';
import coffeeBean2 from 'images/coffee-bean01.jpg';
import coffeeBean3 from 'images/coffee-bean04.jpg';
import coffeeBean4 from 'images/coffee-bean05.jpg';

function Coffee() {
  return (
    <article className={styles.about_article3}>
      <h2>COFFEE</h2>
      <h3>최고의 커피는 최상의 원두로부터 나옵니다.</h3>
      <ul>
        <li className={styles.article3_1}>
          비터스윗의 아라비카 원두는 고품질, 그 이상의 의미를 갖습니다. <br />
          최상의 품질을 위한 최선의 노력들이 모든 단계에서 이뤄집니다.
        </li>
        <img src={coffeeBean1} alt="coffeeBean1" className={styles.coffeeBean1} />
        <br />
        <hr />
        <div className={styles.about_article3_2}>
          <img src={coffeeBean2} alt="coffeeBean2" className={styles.coffeeBean2} />
          <li>
            <p>"고품질을 위한, 고지대를 향한”</p>
            고품질의 아라비카 원두는 고도가 높은 곳에서 재배됩니다. <br />큰 일교차로 당도가 높고 밀도가 단단한 원두는 깊고
            복합적인 풍미를 냅니다.
          </li>
        </div>
        <br />
        <div className={styles.about_article3_3}>
          <li>
            <p>“커피 농가와 지속적인 관계”</p>
            비터스윗은 커피 농부들과 공정한 커피 거래를 하며, <br />
            커피 농가와 지역사회가 커피 산업으로 지속 가능한 삶을 영위하도록 노력하고 있습니다.
          </li>
          <img src={coffeeBean3} alt="coffeeBean3" className={styles.coffeeBean3} />
        </div>
        <br />
        <div className={styles.about_article3_4}>
          <img src={coffeeBean4} alt="coffeeBean4" className={styles.coffeeBean4} />
          <li>
            <p>“까다롭고 엄격한 수확 과정”</p>
            비터스윗은 잘 익은 커피 열매만 수확합니다. <br />
            그리고 크기, 색깔 및 밀도를 기준으로 최상의 열매를 한 번 더 골라냅니다. <br />
            보다 까다롭고 엄격한 수확 과정이 곧 훌륭한 커피를 탄생시킵니다.
            <br />
            까다롭고 엄격한 수확 과정을 거쳐야 비로소 최상의 커피 맛을 구현할 수 있습니다.
          </li>
        </div>
      </ul>
    </article>
  );
}

export default Coffee;
