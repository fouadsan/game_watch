import axios from "axios";

const baseURL = "https://1a03-105-103-210-60.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export default axiosInstance;
