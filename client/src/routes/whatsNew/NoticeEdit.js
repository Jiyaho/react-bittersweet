import styles from "css/App.module.css";
import Nav from "components/Nav";
import Footer from "components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NoticeEdit() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const { _id } = useParams();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getPosts = () => {
    axios.get("/api/posting").then((response) => {
      let post = response.data;
      setPosts(post);
    });
  };

  const filteredPost = posts.filter((item) => {
    return item._id === _id;
  });

  const onWriterHandler = (e) => {
    setWriter(e.target.value);
  };
  const onTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onContentHandler = (e) => {
    setContent(e.target.value);
  };

  const onEditSubmit = (e) => {
    e.preventDefault();
    let body = {
      writer: writer,
      title: title,
      content: content,
    };
    const request = axios
      .patch(`/api/posting/${_id}`, body)
      .then((response) => response.data);
    alert("수정 완료!");
    navigate("/notice");

    return {
      type: "user_editing",
      payload: request,
    };
  };

  const onClickCancle = () => {
    if (window.confirm("등록을 취소 하시겠습니까?") == true) {
      navigate("/notice");
    } else {
      return;
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Nav />
      <h2 className={styles.page_title}>EDIT POST</h2>
      {filteredPost.map((item) => {
        return (
          <div key={item._id} className={styles.wrapNoticeWrite}>
            <div>
              <form onSubmit={onEditSubmit}>
                <br />
                <input
                  placeholder={item.writer}
                  type="text"
                  required="required"
                  max="10"
                  className={styles.titleInput}
                  onChange={onWriterHandler}
                  value={writer}
                />
                <input
                  placeholder={item.title}
                  type="text"
                  required="required"
                  max="10"
                  className={styles.titleInput}
                  onChange={onTitleHandler}
                  value={title}
                />
                <div className={styles.contentWrap}>
                  <textarea
                    cols="50"
                    rows="10"
                    placeholder={item.content}
                    onChange={onContentHandler}
                    value={content}
                  />
                </div>
                <div className={styles.noticeWriteBtnWrap}>
                  <button
                    className={styles.postCancleBtn}
                    onClick={onClickCancle}
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className={styles.postBtn}
                    onSubmit={onEditSubmit}
                    value={_id}
                  >
                    등록
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default NoticeEdit;
