import Nav from 'components/Nav';
import Footer from 'components/Footer';
import styles from 'css/App.module.css';
import FormOfNotice from 'components/whatsnew/FormOfNotice';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ScrollBtn from 'components/ScrollBtn';

function Notice() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get(`${process.env.REACT_APP_HOST}/api/posting`).then((response) => {
      let post = response.data.reverse();
      console.log(post);
      setPosts(post);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main>
      <Nav />
      <ScrollBtn />
      <section>
        <h2 className={styles.page_title}>NOTICE</h2>
        <Link to={`/notice-write`}>
          <button className={styles.writeBtn}>📝 WRITE</button>
        </Link>
        <article className={styles.noticeDiv}>
          <table className={styles.noticeTable}>
            <colgroup>
              <col width="7%" />
              <col width="49%" />
              <col width="24%" />
              <col width="*" />
            </colgroup>
            <thead>
              <tr>
                <th>NO</th>
                <th>제목</th>
                <th>작성자</th>
                <th>날짜</th>
              </tr>
            </thead>
            {posts.map((item) => {
              return (
                <FormOfNotice
                  key={item.id}
                  _id={item._id}
                  no={item.id}
                  title={item.title}
                  titleValue={item._id}
                  date={item.date.substring(0, 10)}
                  writer={item.writer}
                />
              );
            })}
          </table>
        </article>
      </section>
      <Footer />
    </main>
  );
}
export default Notice;
