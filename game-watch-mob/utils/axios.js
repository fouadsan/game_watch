import axios from "axios";

const baseURL = "https://fcd7-105-103-30-19.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export default axiosInstance;
