import FormOfNoticeWrite from "components/FormOfNoticeWrite";
import Nav from "components/Nav";
import Footer from "components/Footer";
import styles from "css/App.module.css";
import { useState } from "react";

function NoticeWrite() {
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
              placeholder="제목을 입력해 주세요."
              type="text"
              required="required"
              max="10"
              className={styles.titleInput}
              onChange={getValue}
              name="title"
            ></input>
            <div className={styles.contentWrap}>
              <textarea
                cols="50"
                rows="10"
                placeholder="내용을 입력해 주세요."
                onChange={getValue}
                name="content"
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
            {/* <input
                type="submit"
                required="required"
                className={styles.contentInput}
                onSubmit={onSubmit}
              ></input> */}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default NoticeWrite;
