import styles from "css/App.module.css";

function FormOfNoticeWrite({
  titleValue,
  titleOnChange,
  titleName,
  contentValue,
  contentOnChange,
  onSubmit,
}) {
  return (
    <div className={styles.wrapNoticeWrite}>
      <div>
        <form>
          <label>
            제목
            <input
              placeholder="제목을 입력해 주세요."
              type="text"
              required="required"
              max="10"
              className={styles.titleInput}
              value={titleValue}
              onChange={titleOnChange}
              name={titleName}
            ></input>
          </label>
        </form>
      </div>
      <div className={styles.contentWrap}>
        <form>
          <label>
            내용
            <p>
              <textarea
                cols="50"
                rows="10"
                placeholder="내용을 입력해 주세요."
                value={contentValue}
                onChange={contentOnChange}
              ></textarea>
            </p>
            <input
              type="submit"
              required="required"
              className={styles.contentInput}
              onSubmit={onSubmit}
            ></input>
          </label>
        </form>
      </div>
    </div>
  );
}
export default FormOfNoticeWrite;
