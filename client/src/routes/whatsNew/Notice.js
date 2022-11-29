import Nav from "components/Nav";
import Footer from "components/Footer";
import styles from "css/App.module.css";
import FormOfNotice from "components/whatsnew/FormOfNotice";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ScrollBtn from "components/ScrollBtn";

function Notice() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get("/api/posting").then((response) => {
      let post = response.data.reverse();
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
      <ScrollBtn />
      <h2 className={styles.page_title}>NOTICE</h2>
      <div>
        <Link to={`/notice-write`}>
          <button className={styles.writeBtn}>📝 WRITE</button>
        </Link>
      </div>
      <div className={styles.noticeDiv}>
        <table className={styles.noticeTable}>
          <colgroup>
            <col width="8%" />
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
      </div>
      <Footer />
    </div>
  );
}
export default Notice;
