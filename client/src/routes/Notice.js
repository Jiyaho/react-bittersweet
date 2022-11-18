import Nav from "components/Nav";
import Footer from "components/Footer";
import styles from "css/App.module.css";
import FormOfNotice from "components/FormOfNotice";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Notice() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get("/api/posting").then((response) => {
      let post = response.data;
      console.log(post);
      setPosts(post);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Nav />
      <h2 className={styles.page_title}>NOTICE</h2>
      <div>
        <Link to={`/notice-write`}>
          <button className={styles.writeBtn}>WRITE</button>
        </Link>
      </div>
      <div className={styles.noticeDiv}>
        <table className={styles.noticeTable}>
          <colgroup>
            <col width="5%" />
            <col width="50%" />
            <col width="20%" />
            <col width="18%" />
            <col width="*" />
          </colgroup>
          <thead>
            <tr>
              <th>NO</th>
              <th>제목</th>
              <th>작성자</th>
              <th>날짜</th>
              <th>조회수</th>
            </tr>
          </thead>
          {posts.map((item) => {
            return (
              <FormOfNotice
                key={item.id}
                idx={item.id}
                title={item.title}
                date={item.date}
                writer={item.writer}
                view="0"
              />
            );
          })}
        </table>
      </div>
      <Footer />
    </div>
  );
}
export default Notice;
