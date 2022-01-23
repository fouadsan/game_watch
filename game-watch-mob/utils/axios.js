import axios from "axios";

const baseURL = "https://d5a3-105-111-72-97.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

// axiosInstance.defaults.headers.common["Authorization"] = "";

export default axiosInstance;
