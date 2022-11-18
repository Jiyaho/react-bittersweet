import Nav from "components/Nav";
import Footer from "components/Footer";
import styles from "css/App.module.css";
import FormOfNotice from "components/FormOfNotice";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { userPosting } from "_actions/user_action";
import { useDispatch } from "react-redux";

function Notice() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [view, setView] = useState(0);

  const getPosts = () => {
    axios.get("/api/posting").then((response) => {
      let post = response.data;
      console.log(post);
      setPosts(post);
    });
  };

  const getCounts = (e) => {
    console.log(e.target.value);
    const postingId = e.target.value;
    posts.filter((item) => {
      if (item._id === postingId) {
        let body = { view: view };
        // setView(view + 1);
        dispatch(userPosting(body)).then((response) => {
          if (response.payload.postSuccess) {
            console.log("조회수 업데이트 성공!");
          } else {
            alert("조회수 업데이트 Error");
          }
        });
      }
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
                _id={item._id}
                no={item.id}
                title={item.title}
                titleValue={item._id}
                onClick={getCounts}
                date={item.date.substring(0, 10)}
                writer={item.writer}
                view={item.view}
                viewValue={view}
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
