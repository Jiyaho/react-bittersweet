import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "css/App.module.css";
import { useDispatch } from "react-redux";
import { loginUser } from "_actions/user_action";
import Nav from "components/Nav";
import Footer from "components/Footer";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      email: email,
      password: password,
    };
    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        alert("로그인 성공!");
        navigate("/");
      } else {
        alert("Error");
      }
    });
  };
  return (
    <div>
      <Nav />
      <h2 className={styles.page_title}>LOGIN</h2>
      <div className={styles.LoginPageWrap}>
        <form onSubmit={onSubmitHandler}>
          <label>Email</label>
          <input type="email" value={email} onChange={onEmailHandler} />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={onPasswordHandler}
          />
          <br />
          <button className={styles.loginBtn} type="submit">
            Login
          </button>
          <Link to={`/register`}>
            <button className={styles.signUpBtn}>Sign up</button>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
