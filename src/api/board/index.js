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

export const voteOption = async (boardId ,optionId) => {
  const response = await client.get(`/api/v0/vote/${(boardId)}/${optionId}`);
  return response.data;
}

export const newComment = async (boardId, parentId, nickname, password, content, selectOption) => {
  console.log(`select : ${selectOption}`)
  const response = await client.post(`/api/v0/comment/new`,{
    boardId : boardId,
    parentId : parentId,
    nickname : nickname,
    password : password,
    content : content,
    select : selectOption,
  })
}

export const delComment = async (commentId,password) => {
  const response = await client.delete(`/api/v0/comment/${commentId}?password=${password}`);
  return response.data;
}

export const getBoards = async () => {
  const response = await client.get(`/api/v0/board`)
  return response.data
}

export const getBoardsByTag = async (tag) => {
  const response = await client.get(`/api/v0/board?tag=${tag}`)
  return response.data
}

export const getTags = async () => {
  const response = await client.get(`/api/v0/board/tag`);
  console.log(response)
  return response.data
}

export const next = async () => {
  const response = await client.get(`/api/v0/board/next`);
  return response.data
}