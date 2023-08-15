import styles from 'css/App.module.css';

function FormOfNoticeWrite({
  formOnSubmit,
  writerPlaceholder,
  writerOnchange,
  writerValue,
  titlePlaceholder,
  titleOnchange,
  titleValue,
  contentPlaceholder,
  contentOnchange,
  contentValue,
  buttonOnSubmit,
  cancleBtnOnClick,
  submitBtnValue,
}) {
  return (
    <article className={styles.wrapNoticeWrite}>
      <form onSubmit={formOnSubmit}>
        <br />
        <input
          placeholder={writerPlaceholder}
          type="text"
          required="required"
          max="10"
          className={styles.titleInput}
          onChange={writerOnchange}
          value={writerValue}
        />
        <input
          placeholder={titlePlaceholder}
          type="text"
          required="required"
          max="10"
          className={styles.titleInput}
          onChange={titleOnchange}
          value={titleValue}
        />
        <div className={styles.contentWrap}>
          <textarea cols="50" rows="10" placeholder={contentPlaceholder} onChange={contentOnchange} value={contentValue} />
        </div>
        <div className={styles.noticeWriteBtnWrap}>
          <button className={styles.postCancleBtn} onClick={cancleBtnOnClick}>
            취소
          </button>
          <button type="submit" className={styles.postBtn} onSubmit={buttonOnSubmit} value={submitBtnValue}>
            등록
          </button>
        </div>
      </form>
    </article>
  );
}
export default FormOfNoticeWrite;
