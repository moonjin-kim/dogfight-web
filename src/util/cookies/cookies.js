import {Cookies} from 'react-cookie';

const cookies = new Cookies();

const EXPIRES_TIME = 1209600000;

export const setAccessToken = async (value) => {
  await setCookie("access",value,{
    path: '/',
    secure: '/',
    expires:EXPIRES_TIME
  })
}

export const setRequestToken = async (value) => {
  await setCookie("request",value,{
    path: '/',
    secure: '/',
    expires:EXPIRES_TIME
  })
}

export const getAccessToken = async () => {
  return await getCookie("access");
}

export const getRequestToekn = async () => {
  return await getCookie("request");
}

export const setCookie = (name , value, options) => {
 	return cookies.set(name, value, {...options}); 
}

export const getCookie = (name) => {
 return cookies.get(name); 
}