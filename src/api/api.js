import axios, { isAxiosError } from 'axios';
import { gerRefreshToken, getAccessToken, removeAccessToken, setAccessToken, setRefreshToken, setRequestToken } from '../util/cookies/cookies';
import { requestAccessToken } from './user';

export const client = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    "Content-Type": `application/json;charset=UTF-8`,
    "Accept": "application/json",
  }
});


client.interceptors.request.use(
    async (config) => {
      const accessToken = await getAccessToken();
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  


client.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    const status = error.response?.status;
    console.log(`status : ${error}`);
  
    // 401 에러 처리 (토큰 만료 등)
    if ((status === 403) && !originalRequest._retry) {
      originalRequest._retry = true; // 중복 재시도를 방지하기 위해 요청 객체에 _retry 속성 추가
      try {
        // 토큰을 재발급
        const newToken = await refreshAccessToken();
        // 재발급한 토큰을 요청 헤더에 포함
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        
        // 기존 요청을 다시 시도
        return client(originalRequest);
      } catch (err) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
  
  

async function refreshAccessToken() {
  const refreshToken = await gerRefreshToken();

  await removeAccessToken();

  if (!refreshToken) {
    return undefined;
  }

  try {
    const response  = await requestAccessToken(refreshToken);
    const newAccessToken = response?.token?.access;
    

    if (!newAccessToken) {
      throw new Error('Failed to obtain new access token');
    }

    await setAccessToken(newAccessToken);
    await setRefreshToken(response?.token?.refresh);
    return newAccessToken;
  } catch (error) {
    console.log("error", error);
    return undefined;
  }
}

  
  export default client;