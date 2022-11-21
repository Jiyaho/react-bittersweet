import FormOfNoticeWrite from "components/FormOfNoticeWrite";
import Nav from "components/Nav";
import Footer from "components/Footer";
import styles from "css/App.module.css";
import { useState } from "react";
import { userPosting } from "_actions/user_action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function NoticeWrite() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onWriterHandler = (e) => {
    setWriter(e.target.value);
  };
  const onTilteHandler = (e) => {
    setTitle(e.target.value);
  };
  const onContentHandler = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      writer: writer,
      title: title,
      content: content,
    };
    dispatch(userPosting(body)).then((response) => {
      if (response.payload.postSuccess) {
        alert("등록 완료!");
        navigate("/notice");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div>
      <Nav />
      <h2 className={styles.page_title}>WRITE</h2>
      <FormOfNoticeWrite
        formOnSubmit={onSubmit}
        writerOnchange={onWriterHandler}
        writerValue={writer}
        titleOnchange={onTilteHandler}
        titleValue={title}
        contentOnchange={onContentHandler}
        contentValue={content}
        buttonOnSubmit={onSubmit}
      />
      <Footer />
    </div>
  );
}
export default NoticeWrite;
