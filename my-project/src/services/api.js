import axios from "axios";

const api = axios.create({
  baseURL: "https://fb.comworld.in/",
});

export default api;