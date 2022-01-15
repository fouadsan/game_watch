import axios from "axios";

const baseURL = "https://7fe5-105-103-113-86.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

// axiosInstance.defaults.headers.common["Authorization"] = "";

export default axiosInstance;
