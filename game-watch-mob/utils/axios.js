import axios from "axios";

const baseURL = "https://c7cc-105-109-93-1.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export default axiosInstance;
