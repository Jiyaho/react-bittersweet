import Nav from 'components/Nav';
import Footer from 'components/Footer';
import styles from 'css/App.module.css';
import KakaoMap from 'components/store/KakaoMap';

function Store() {
  return (
    <main>
      <Nav />
      <section>
        <h2 className={styles.page_title}>FIND A STORE</h2>
        <h3 className={styles.storeH3}> 🔍 가까운 매장을 찾아보세요.</h3>
        <KakaoMap />
      </section>
      <Footer />
    </main>
  );
}
export default Store;
