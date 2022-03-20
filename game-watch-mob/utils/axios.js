import axios from "axios";

const baseURL = "https://911e-154-246-80-153.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export default axiosInstance;
