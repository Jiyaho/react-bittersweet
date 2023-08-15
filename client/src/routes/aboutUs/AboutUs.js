import Nav from 'components/Nav';
import Footer from 'components/Footer';
import styles from 'css/App.module.css';
import History from 'routes/aboutUs/History';
import BrandPrinciple from 'routes/aboutUs/BrandPrinciple';
import Coffee from 'routes/aboutUs/Coffee';
import ScrollBtn from 'components/ScrollBtn';

function AboutUs() {
  const scrollToBrandPrinciple = () => {
    window.scrollTo({ top: 700, behavior: 'smooth' });
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 460, behavior: 'smooth' });
    }
  };
  const scrollToCoffee = () => {
    window.scrollTo({ top: 1700, behavior: 'smooth' });
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 1070, behavior: 'smooth' });
    }
  };
  return (
    <main>
      <Nav />
      <ScrollBtn />
      <section>
        <h2 className={styles.page_title}>ABOUT BITTERSWEET</h2>
        <article className={styles.about_section}>
          <nav className={styles.about_nav}>
            <ul>
              <li>
                <button>HISTORY</button>
              </li>
              <li>
                <button onClick={scrollToBrandPrinciple}>BRAND PRINCIPLE</button>
              </li>
              <li>
                <button onClick={scrollToCoffee}>COFFEE</button>
              </li>
            </ul>
          </nav>
          <History />
          <BrandPrinciple />
          <Coffee />
        </article>
      </section>
      <Footer />
    </main>
  );
}
export default AboutUs;
