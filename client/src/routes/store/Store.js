import Nav from "components/Nav";
import Footer from "components/Footer";
import styles from "css/App.module.css";
import KakaoMap from "components/store/KakaoMap";

function Store() {
  return (
    <div>
      <Nav />
      <h2 className={styles.page_title}>FIND A STORE</h2>
      <h3 className={styles.storeH3}> ๐ ๊ฐ๊น์ด ๋งค์ฅ์ ์ฐพ์๋ณด์ธ์.</h3>
      <KakaoMap />
      <Footer />
    </div>
  );
}
export default Store;
