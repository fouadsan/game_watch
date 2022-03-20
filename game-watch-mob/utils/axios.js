import axios from "axios";

const baseURL = "https://cf6b-154-246-80-153.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export default axiosInstance;
