import axios from "axios";
import { BASE_URL } from "../../constants/index.js";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 120000,
});

axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  function (response) {
    // Do something with request data
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default {
  setHeader(header: any) {
    ////setting header
    axiosInstance.defaults.headers.common[header.key] = header.value;
    axiosInstance.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axiosInstance.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
  },
  fetch(methodName: string, data?: any) {
    return axiosInstance.get(methodName, {
      params: data,
    });
  },
  create(methodName: string, data: any) {
    /// call post on axiosinstance
  },
  update(methodName: string, id: string, data: any) {
    /// call put on axiosinstance
  },
  delete(methodName: string, data: any) {
    //// call delete on axiosinstance
  },
};
