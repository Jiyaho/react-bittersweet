import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "_actions/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
  // 위 function의 3가지 Parameter를 App.js에 부여해주어 페이지 접근 권한을 설정해준다.

  // option의 3가지 선택지
  // 1. null: 아무나 출입 가능한 페이지
  // 2. true: 로그인한 유저만 출입 가능한 페이지
  // 3. false: 로그인한 유저는 출입 불가능한 페이지

  // adminRoute 선택지
  // 1. null: 아무나 출입 가능한 페이지 (default는 null로 설정)
  // 2. true: admin만 출입 가능한 페이지

  function AuthenticationCheck() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);
        //로그인하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            navigate("/login");
          }
        } else {
          //로그인을 한 상태
          //1. admin 권한이 없는 유저가 adminRoute를 접속하려 할 때.
          //2. 로그인한 유저가 출입 불가능한 페이지(LoginPage, RegisterPage)로 접근하려 할 때.
          if (adminRoute && !response.payload.isAdmin) {
            navigate("/");
          } else {
            if (option === false) {
              navigate("/");
            }
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
