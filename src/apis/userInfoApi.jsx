// src/api/userInfoApi.js
import sessionApi from './sessionApi';

/** 로그인 세션이 담긴 쿠키로 내 정보 가져오기 */
const userInfoApi = async () => {
  const { data } = await sessionApi.get('/users/me');
  return data;
};

export default userInfoApi;
