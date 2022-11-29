import Nav from "components/Nav";
import Footer from "components/Footer";
import styles from "css/App.module.css";

function Store() {
  return (
    <div>
      <Nav />
      <h2 className={styles.page_title}>FIND A STORE</h2>
      <Footer />
    </div>
  );
}
export default Store;
