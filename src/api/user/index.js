import axios from "axios";
import client from "../api"

const BASE_URL = 'http://localhost:8080'

export const requestAccessToken = async (refreshToken) => {
  const request = await axios.post(`/api/v0/user/refresh`,{
    "refreshToken" : refreshToken
  })
  return request.data;
}

export const register = async (account, password, email, nickname) => {
  const request = await client.post(`/api/v0/user/register`,{
    "account" : account,
    "password" : password,
    "email" : email,
    "nickname" : nickname
  })
  
  return request.data;
}

export const login = async (account, password) => {
  const request = await client.post(`${BASE_URL}/api/v0/user/login`,{
    "account" : account,
    "password" : password,
  })

  return request.data;
}