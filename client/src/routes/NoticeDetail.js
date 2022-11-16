import styles from "css/App.module.css";
import Nav from "components/Nav";
import Footer from "components/Footer";
import FormOfNoticeDetail from "components/FormOfNoticeDetail";
import noticeData from "data/noticeData.json";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function NoticeDetail() {
  const data = noticeData.data;
  const [datas, setDatas] = useState([]);
  const { idx } = useParams();
  const navigate = useNavigate();

  const getDatas = () => {
    setDatas(data);
  };

  const filteredNoticeDetail = datas.filter((item) => {
    return item.idx === idx;
  });

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div>
      <Nav />
      <h2 className={styles.page_title}>NOTICE DETAIL</h2>
      {filteredNoticeDetail.map((item) => {
        return (
          <FormOfNoticeDetail
            header={item.title}
            date={item.date}
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
