import styles from "css/App.module.css";

function FormOfNoticeWrite({
  formOnSubmit,
  writerOnchange,
  writerValue,
  titleOnchange,
  titleValue,
  contentOnchange,
  contentValue,
  buttonOnSubmit,
}) {
  return (
    <div className={styles.wrapNoticeWrite}>
      <div>
        <form onSubmit={formOnSubmit}>
          <br />
          <input
            placeholder="이름을 입력해 주세요."
            type="text"
            required="required"
            max="10"
            className={styles.titleInput}
            onChange={writerOnchange}
            value={writerValue}
          ></input>
          <input
            placeholder="제목을 입력해 주세요."
            type="text"
            required="required"
            max="10"
            className={styles.titleInput}
            onChange={titleOnchange}
            value={titleValue}
          ></input>
          <div className={styles.contentWrap}>
            <textarea
              cols="50"
              rows="10"
              placeholder="내용을 입력해 주세요."
              onChange={contentOnchange}
              value={contentValue}
            ></textarea>
          </div>
          <button
            type="submit"
            required="required"
            className={styles.postBtn}
            onSubmit={buttonOnSubmit}
          >
            등록
          </button>
        </form>
      </div>
    </div>
  );
}
export default FormOfNoticeWrite;
