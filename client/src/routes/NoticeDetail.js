import styles from "css/App.module.css";
import Nav from "components/Nav";
import Footer from "components/Footer";
import FormOfNoticeDetail from "components/FormOfNoticeDetail";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function NoticeDetail() {
  const [posts, setPosts] = useState([]);
  const { _id } = useParams();
  const navigate = useNavigate();

  // const getPost = () => {
  //   axios.get("/api/posting/_id").then((response) => {
  //     let result = response.data;
  //     console.log(result);
  //     setDatas(result);
  //   });
  // };

  const getPosts = () => {
    axios.get("/api/posting").then((response) => {
      let post = response.data;
      console.log(post);
      setPosts(post);
    });
  };
  // const getDatas = () => {
  //   setDatas(result);
  // };

  const filteredNoticeDetail = posts.filter((item) => {
    return item._id === _id;
  });

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Nav />
      <h2 className={styles.page_title}>NOTICE DETAIL</h2>
      {posts.map((item) => {
        return (
          <FormOfNoticeDetail
            key={item._id}
            header={item.title}
            date={item.date}
            writer={item.writer}
            content={item.content}
          />
        );
      })}
      <button
        className={styles.detailBtn}
        onClick={() => {
          navigate(-1);
        }}
      >
        목록
      </button>
      <Footer />
    </div>
  );
}
export default NoticeDetail;
