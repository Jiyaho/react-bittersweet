import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER, USER_POSTING } from "./types";

export function loginUser(dataToSubmit) {
  //dataToSubmit은 LoginPage의 body(이메일, 패스워드)를 parameter로 받는 것임.
  const request = axios
    .post(`${process.env.REACT_APP_HOST}/api/users/login`, dataToSubmit, {
      withCredentials: true,
    })
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${process.env.REACT_APP_HOST}/api/users/register`, dataToSubmit, {
      withCredentials: true,
    })
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get(`${process.env.REACT_APP_HOST}/api/users/auth`, {
      withCredentials: true,
    })
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function userPosting(dataToSubmit) {
  const request = axios
    .post(`${process.env.REACT_APP_HOST}/api/posting`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: USER_POSTING,
    payload: request,
  };
}
