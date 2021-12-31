import axios from "axios";

const baseURL = "https://47f0-105-103-190-132.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export default axiosInstance;
