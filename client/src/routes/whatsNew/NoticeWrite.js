import FormOfNoticeWrite from 'components/whatsnew/FormOfNoticeWrite';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import styles from 'css/App.module.css';
import { useState } from 'react';
import { userPosting } from '_actions/user_action';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function NoticeWrite() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
      writer,
      title,
      content,
    };
    dispatch(userPosting(body)).then((response) => {
      if (response.payload.postSuccess) {
        alert('등록 완료!');
        navigate('/notice');
      } else {
        alert('Error');
      }
    });
  };

  const onClickCancle = () => {
    if (window.confirm('등록을 취소 하시겠습니까?') === true) {
      navigate('/notice');
    } else {
      return;
    }
  };

  return (
    <main>
      <Nav />
      <section>
        <h2 className={styles.page_title}>WRITE</h2>
        <FormOfNoticeWrite
          formOnSubmit={onSubmit}
          writerPlaceholder="이름을 입력해 주세요"
          writerOnchange={onWriterHandler}
          writerValue={writer}
          titlePlaceholder="제목을 입력해 주세요."
          titleOnchange={onTilteHandler}
          titleValue={title}
          contentPlaceholder="내용을 입력해 주세요."
          contentOnchange={onContentHandler}
          contentValue={content}
          buttonOnSubmit={onSubmit}
          cancleBtnOnClick={onClickCancle}
        />
      </section>
      <Footer />
    </main>
  );
}
export default NoticeWrite;
