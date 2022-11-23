import { Link, useNavigate } from "react-router-dom";
import styles from "css/App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

function Nav() {
  const navigate = useNavigate();
  const [toggleBtn, setToggleBtn] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [logInUserName, setLogInUserName] = useState("");

  const handleToggleBtn = () => {
    setToggleBtn(!toggleBtn);
  };

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        navigate("/");
        alert("로그아웃 하였습니다.");
        setIsLogin(true);
      }
    });
  };

  const getUserName = () => {
    axios.get("/api/users").then((response) => {
      let user = response.data;
      console.log(user);
      if (user.toString().includes("object")) {
        setIsLogin(true);
        setLogInUserName("🔐LOG-IN");
      } else {
        setIsLogin(false);
        // setLogInUserName(`${user}님 🔓LOG-OUT`);
      }
    });
  };

  useEffect(() => {
    getUserName();
  }, [isLogin, logInUserName]);

  return (
    <div className={styles.navbar}>
      <div>
        <FontAwesomeIcon icon={faDroplet} className={styles.navbar_svg} />
        <span className={styles.navbar_logo}>
          <Link to={`/`}>Bittersweet</Link>
        </span>
      </div>
      <ul
        className={!toggleBtn ? styles.navbar_menu : styles.navbar_menuToggle}
      >
        <li>
          <Link to={`/`}>HOME</Link>
        </li>
        <li>
          <Link to={`/about`}>ABOUT US</Link>
        </li>
        <li>
          <Link to={`/menu`}>MENU</Link>
        </li>
        <li>
          <Link to={`/store`}>STORE</Link>
        </li>
        <li>
          <Link to={`/faq`}>FAQ</Link>
        </li>
        <li>
          <Link to={`/notice`}>WHAT'S NEW</Link>
        </li>
      </ul>

      {isLogin ? (
        <Link to={`/login`}>
          <button
            className={
              !toggleBtn ? styles.navbar_login : styles.navbar_loginToggle
            }
            onClick={onClickHandler}
            value={logInUserName}
          >
            {logInUserName}
          </button>
        </Link>
      ) : (
        <button
          className={
            !toggleBtn ? styles.navbar_logout : styles.navbar_loginToggle
          }
          onClick={onClickHandler}
          value={logInUserName}
        >
          🔓LOG-OUT
        </button>
      )}
      <Link to={`#`}>
        <FontAwesomeIcon
          onClick={handleToggleBtn}
          icon={faBars}
          className={styles.navbar_toggleBtn}
        />
      </Link>
    </div>
  );
}
export default Nav;
