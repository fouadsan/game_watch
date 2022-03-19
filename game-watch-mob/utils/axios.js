import axios from "axios";

const baseURL = "https://5e88-105-103-229-34.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export default axiosInstance;
