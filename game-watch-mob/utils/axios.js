import axios from "axios";

const baseURL = "https://489d-105-103-89-158.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export default axiosInstance;
