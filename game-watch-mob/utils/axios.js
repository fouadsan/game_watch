import axios from "axios";

const baseURL = "https://39e7-154-247-27-201.ngrok.io/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export default axiosInstance;
