import {Cookies} from 'react-cookie';

const cookies = new Cookies();

const EXPIRES_TIME = 1209600000;

export const setAccessToken = async (value) => {
  setCookie("access",value,{
    path: '/',
    secure : true,
  })
}

export const setRefreshToken = async (value) => {
  setCookie("refresh",value,{
    path: '/',
    secure : true,
  })
}

export const getAccessToken = async () => {
  return await getCookie("access");
}

export const gerRefreshToken = async () => {
  return await getCookie("refresh");
}

export const setCookie = (name , value, options) => {
 	return cookies.set(name, value, {...options}); 
}

export const getCookie = (name) => {
 return cookies.get(name); 
}

export const removeAccessToken = async () => {
  cookies.remove('access', {path : '/'},1000);
}

export const removeToken = async () => {
  console.log("remove");
  await removeAccessToken();
  cookies.remove('refresh', {path : '/'},1000);
}