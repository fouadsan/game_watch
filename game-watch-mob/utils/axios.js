import axios from "axios";

const baseURL = "https://4d11-105-103-137-227.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export default axiosInstance;
