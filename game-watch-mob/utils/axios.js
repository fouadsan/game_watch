import axios from "axios";

const baseURL = "https://fdff-154-246-161-86.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

// axiosInstance.defaults.headers.common["Authorization"] = "";

export default axiosInstance;
