import styles from "css/App.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function FormOfFaq({ question, answer }) {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.question}>
      <button onClick={handleToggle}>
        <span
          className={
            !toggle ? styles.question_span : styles.question_span_toggle
          }
        >
          Q. {question}
        </span>
        <FontAwesomeIcon
          icon={faCaretDown}
          className={!toggle ? styles.question_i : styles.question_i_rotate}
        />
      </button>
      <p className={!toggle ? styles.answer_p : styles.answer_p_toggle}>
        A. {answer}
      </p>
    </div>
  );
}

export default FormOfFaq;
