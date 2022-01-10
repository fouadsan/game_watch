import axios from "axios";

const baseURL = "https://01f2-105-103-155-197.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export default axiosInstance;
