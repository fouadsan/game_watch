import axios from "axios";

const baseURL = "https://cc02-105-103-104-215.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

// axiosInstance.defaults.headers.common["Authorization"] = "";

export default axiosInstance;
