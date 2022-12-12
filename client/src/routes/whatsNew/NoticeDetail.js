import styles from "css/App.module.css";
import Nav from "components/Nav";
import Footer from "components/Footer";
import FormOfNoticeDetail from "components/whatsnew/FormOfNoticeDetail";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function NoticeDetail() {
  const [posts, setPosts] = useState([]);
  const { _id } = useParams();
  const navigate = useNavigate();

  const getPosts = () => {
    axios.get(`${process.env.REACT_APP_HOST}/api/posting`).then((response) => {
      let post = response.data;
      setPosts(post);
    });
  };

  const filteredNoticeDetail = posts.filter((item) => {
    return item._id === _id;
  });

  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_HOST}/api/posting/${_id}`)
      .then(navigate(-1));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Nav />
      <h2 className={styles.page_title}>NOTICE DETAIL</h2>
      {filteredNoticeDetail.map((item) => {
        return (
          <FormOfNoticeDetail
            key={item.id}
            _id={item._id}
            title={item.title}
            date={item.date.substring(0, 10)}
            writer={item.writer}
            content={item.content}
            deleteOnClick={handleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default NoticeDetail;
