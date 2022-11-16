import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "routes/Home";
import AboutUs from "routes/AboutUs";
import Menu from "routes/Menu";
import Faq from "routes/Faq";
import MenuDetail from "routes/MenuDetail";
import Store from "routes/Store";
import Notice from "routes/Notice";
import NoticeDetail from "routes/NoticeDetail";
import NoticeWrite from "routes/NoticeWrite";
import LoginPage from "routes/LoginPage";
import RegisterPage from "routes/RegisterPage";
import Auth from "hoc/auth";

function App() {
  //페이지 접근 권한 설정
  const AuthHomePage = Auth(Home, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthHomePage />} />
        <Route path="/login" element={<AuthLoginPage />} />
        <Route path="/register" element={<AuthRegisterPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu-detail/:idx" element={<MenuDetail />} />
        <Route path="/store" element={<Store />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice-detail/:idx" element={<NoticeDetail />} />
        <Route path="/notice-write" element={<NoticeWrite />} />
      </Routes>
    </Router>
  );
}

export default App;
