import axios from "axios";

const api = axios.create({
  baseURL: "https://fb.comworld.in/api",
});

export default api;