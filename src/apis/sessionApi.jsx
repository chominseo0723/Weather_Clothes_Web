// src/lib/sessionApi.js – 세션(쿠키)용 axios 인스턴스
import axios from 'axios';

/** 로그인 세션이 담긴 쿠키를 함께 보내는 axios 객체 */
const sessionApi = axios.create({
  baseURL:'http://localhost:8081',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,   // 브라우저의 세션/쿠키 자동 포함
});

export default sessionApi;