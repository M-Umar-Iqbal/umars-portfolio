import axios from "axios";

const BaseService = axios.create({
  timeout: 10000,
  baseURL: "http://localhost:8000"
});

BaseService.interceptors.request.use((config) => {
  let accessToken = "test";
  if (!accessToken) {
    // Try to get token
  }
  if (accessToken) {
    config.headers["Authorization"] = accessToken;
  }
  return config;
},
  (error) => {
    return Promise.reject(error);
  }
);

BaseService.interceptors.response.use((response) => response, (error) => {
  return Promise.reject(error);
});

export default BaseService;