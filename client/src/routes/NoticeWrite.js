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

  const today = new Date();
  const year = today.getFullYear();
  let getMonth = () => {
    let month = today.getMonth() + 1;
    if (month < 10) {
      return "0" + month;
    } else {
      return month;
    }
  };
  let getDate = () => {
    let date = today.getDate();
    if (date < 10) {
      return "0" + date;
    } else {
      return date;
    }
  };

  const [noticeContent, setNoticeContent] = useState({
    idx: "",
    writer: "",
    title: "",
    content: "",
    date: `${year}-${getMonth()}-${getDate()}`,
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setNoticeContent({
      ...noticeContent,
      [name]: value,
    });
    console.log(noticeContent);
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
      <div className={styles.wrapNoticeWrite}>
        <div>
          <form onSubmit={onSubmit}>
            <br />
            <input
              placeholder="이름을 입력해 주세요."
              type="text"
              required="required"
              max="10"
              className={styles.titleInput}
              onChange={onWriterHandler}
              name="writer"
              value={writer}
            ></input>
            <input
              placeholder="제목을 입력해 주세요."
              type="text"
              required="required"
              max="10"
              className={styles.titleInput}
              onChange={onTilteHandler}
              name="title"
              value={title}
            ></input>
            <div className={styles.contentWrap}>
              <textarea
                cols="50"
                rows="10"
                placeholder="내용을 입력해 주세요."
                onChange={onContentHandler}
                name="content"
                value={content}
              ></textarea>
            </div>
            <button
              type="submit"
              required="required"
              className={styles.postBtn}
              onSubmit={onSubmit}
            >
              등록
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default NoticeWrite;
