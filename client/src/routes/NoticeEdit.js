import FormOfNoticeWrite from "components/FormOfNoticeWrite";
import styles from "css/App.module.css";
import Nav from "components/Nav";
import Footer from "components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { userPosting } from "_actions/user_action";
import { userEditing } from "_actions/user_action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { USER_EDITING } from "_actions/types";

function NoticeEdit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const onTilteHandler = (e) => {
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
          <FormOfNoticeWrite
            key={item.id}
            _id={item._id}
            formOnSubmit={onEditSubmit}
            writerPlaceholder={item.writer}
            writerOnchange={onWriterHandler}
            writerValue={writer}
            titlePlaceholder={item.title}
            titleOnchange={onTilteHandler}
            titleValue={title}
            contentPlaceholder={item.content}
            contentOnchange={onContentHandler}
            contentValue={content}
            buttonOnSubmit={onEditSubmit}
            cancleBtnOnClick={onClickCancle}
            submitBtnValue={_id}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default NoticeEdit;
