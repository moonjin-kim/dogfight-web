import client from "../api"

export const requestAccessToken = async (requestToken) => {
  const request = await client.post(`/api/v0/user/refresh`,{
    requestToken
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
  console.log(request.data);
  return request.data;
}

export const login = async (account, password) => {
  const request = await client.post(`/api/v0/user/login`,{
    "account" : account,
    "password" : password,
  })
  console.log(request.data);
  return request.data;
}