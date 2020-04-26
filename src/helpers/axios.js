import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axios.interceptors.response.use((response) => response.data);

export default axios;
