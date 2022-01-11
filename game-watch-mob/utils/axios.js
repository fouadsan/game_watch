import axios from "axios";

const baseURL = "https://5d82-154-247-42-145.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export default axiosInstance;
