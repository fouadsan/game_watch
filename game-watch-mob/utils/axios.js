import axios from "axios";

const baseURL = "https://babe-154-246-131-52.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

// axiosInstance.defaults.headers.common["Authorization"] = "";

export default axiosInstance;
