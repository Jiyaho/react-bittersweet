import { useEffect, useState } from "react";
import styles from "css/App.module.css";
import Nav from "components/Nav";
import Footer from "components/Footer";
import FormOfFaq from "components/faq/FormOfFaq";
import ScrollBtn from "components/ScrollBtn";

function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [userInput, setUserInput] = useState("");

  const faq = [
    {
      idx: "1",
      q: "첫번째로 자주하는 질문이 뭔가요?",
      a: "첫번째 질문에 대한 대답입니다.",
    },
    {
      idx: "2",
      q: "두번째로 자주하는 질문이 뭔가요?",
      a: "두번째 질문에 대한 대답입니다",
    },
    {
      idx: "3",
      q: "세번째로 자주하는 질문이 뭔가요?",
      a: "세번째 질문에 대한 대답입니다",
    },
    {
      idx: "4",
      q: "네번째로 자주하는 질문이 뭔가요?",
      a: "네번째 질문에 대한 대답입니다",
    },
    {
      idx: "5",
      q: "다섯번째로 자주하는 질문이 뭔가요?",
      a: "다섯번째 질문에 대한 대답입니다",
    },
    {
      idx: "6",
      q: "여섯번째로 자주하는 질문이 뭔가요?",
      a: "여섯번째 질문에 대한 대답입니다",
    },
    {
      idx: "7",
      q: "일곱번째로 자주하는 질문이 뭔가요?",
      a: "일곱번째 질문에 대한 대답입니다",
    },
    {
      idx: "8",
      q: "여덟번째로 자주하는 질문이 뭔가요?",
      a: "여덟번째 질문에 대한 대답입니다",
    },
    {
      idx: "9",
      q: "아홉번째로 자주하는 질문이 뭔가요?",
      a: "아홉번째 질문에 대한 대답입니다",
    },
    {
      idx: "10",
      q: "열번째로 자주하는 질문이 뭔가요?",
      a: "열번째 질문에 대한 대답입니다",
    },
  ];

  const getFaqs = () => {
    setFaqs(faq);
  };

  const inputChange = (e) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    getFaqs();
  }, []);

  const filtered = faqs.filter((faqList) => {
    return faqList.q.includes(userInput);
  });

  return (
    <div className={styles.wrap}>
      <Nav />
      <ScrollBtn />
      <h2 className={styles.page_title}>자주하는 질문</h2>
      <input
        className={styles.faq_input}
        value={userInput}
        placeholder="검색할 내용을 입력해 주세요."
        onChange={inputChange}
      ></input>
      <div className={styles.question_container}>
        {filtered.map((faqList) => {
          return (
            <FormOfFaq
              key={faqList.idx}
              question={faqList.q}
              answer={faqList.a}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
