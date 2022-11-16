import Nav from "components/Nav";
import Footer from "components/Footer";
import styles from "css/App.module.css";
import FormOfNotice from "components/FormOfNotice";
import noticeData from "data/noticeData.json";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import NoticeWrite from "./NoticeWrite";

function Notice() {
  const data = noticeData.data;
  const [posts, setPosts] = useState("");

  const getPosts = () => {
    axios.get("/api/posting").then((response) => {
      let post = response.data;
      // console.log(`서버로부터: ${post}`);
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
          {data.map((item) => {
            return (
              <FormOfNotice
                key={item.idx}
                idx={item.idx}
                title={item.title}
                date={item.date}
                writer={item.writer}
                view={item.view}
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
