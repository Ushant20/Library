import axios from "axios";

const api = axios.create({
  baseURL: "https://api.fb.comworld.in",
});

export default api;