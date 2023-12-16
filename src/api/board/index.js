import axios from "axios";
import client from "../api"
import { getAccessToken } from "../../util/cookies/cookies";
// import { createProxyMiddleware } from "http-proxy-middleware";
// const { createProxyMiddleware } = require('http-proxy-middleware');

const BASE_URL = 'http://localhost:8080'


export const newBoard = async (data) => {
  for (let key of data.keys()) {
    console.log(key, ":", data.get(key));
  }

  for (let value of data.values()) {
    console.log(value);
  }
  const result = await client.post(`${BASE_URL}/api/v0/board/new`, data,{
    headers: { 'content-type': 'multipart/form-data' },
  } );
  return result.data;
}