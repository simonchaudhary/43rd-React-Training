import axios, { ResponseType } from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const get = async (
  url: string,
  params = {},
  responseType = "json" as ResponseType
) => {
  return instance({
    url,
    params,
    method: "get",
    responseType,
  })
    .then((response) => response)
    .catch((error) => {
      console.log("error", error);

      throw error?.response?.data;
    });
};

export const post = async (url: string, params = {}, body = {}) => {
  return instance({
    url,
    params,
    data: body,
    method: "post",
  })
    .then((response) => response)
    .catch((error) => {
      throw error?.response.data;
    });
};
