import FormOfNoticeWrite from "components/FormOfNoticeWrite";
import Nav from "components/Nav";
import Footer from "components/Footer";
import styles from "css/App.module.css";
import { useState } from "react";

function NoticeWrite() {
  const [noticeContent, setNoticeContent] = useState({
    title: "",
    content: "",
  });

  const getValue = (e) => {
    const { titleName, value } = e.target;
    setNoticeContent({
      ...noticeContent,
      [titleName]: value,
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
      <FormOfNoticeWrite
        // titleValue={}
        titleOnChange={getValue}
        // name="title"
        titleName="title"
        // contentValue={}
        // contentOnChange={}
        onSubmit={onSubmit}
      />
      <Footer />
    </div>
  );
}
export default NoticeWrite;
