import axios from "axios";

const baseURL = "https://cf94-105-103-240-62.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export default axiosInstance;
