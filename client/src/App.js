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
  // =====페이지 접근 권한 설정=====
  // Auth(SpecificComponent, option, adminRoute = null);
  // 위 function의 3가지 Parameter를 App.js에 부여해주어 페이지 접근 권한을 설정해준다.

  // option의 3가지 선택지
  // 1. null: 아무나 출입 가능한 페이지
  // 2. true: 로그인한 유저만 출입 가능한 페이지
  // 3. false: 로그인한 유저는 출입 불가능한 페이지

  // adminRoute 선택지
  // 1. null: 아무나 출입 가능한 페이지 (default는 null로 설정)
  // 2. true: admin만 출입 가능한 페이지
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
        <Route path="/notice-detail/:_id" element={<NoticeDetail />} />
        <Route path="/notice-write" element={<NoticeWrite />} />
      </Routes>
    </Router>
  );
}

export default App;
