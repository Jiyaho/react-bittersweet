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
  // const [posts, setPosts] = useState([])
  // const getPosts = () => {
  //   axios
  //     .get('')
  //     .then((response) => {
  //       setPosts(response.data)
  //     })
  // }
  // useEffect(getPosts, []);

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
            <col width="7%" />
            <col width="62%" />
            <col width="19%" />
            <col width="*" />
          </colgroup>
          <thead>
            <tr>
              <th>NO</th>
              <th>제목</th>
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
