import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "_actions/user_action";
import styles from "css/App.module.css";
import Nav from "components/Nav";
import Footer from "components/Footer";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onNameHandler = (e) => {
    setName(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }
    let body = {
      email: email,
      name: name,
      password: password,
    };
    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        navigate("/login");
      } else {
        alert("Failed to sign up.");
      }
    });
  };

  return (
    <div>
      <Nav />
      <h2 className={styles.page_title}>REGISTER</h2>
      <div className={styles.registerWrap}>
        <form className={styles.registerForm} onSubmit={onSubmitHandler}>
          <label>Email</label>
          <input type="email" value={email} onChange={onEmailHandler}></input>
          <label>Name</label>
          <input type="text" value={name} onChange={onNameHandler}></input>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={onPasswordHandler}
          ></input>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={onConfirmPasswordHandler}
          ></input>
          <br />
          <button type="submit">회원가입</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterPage;
