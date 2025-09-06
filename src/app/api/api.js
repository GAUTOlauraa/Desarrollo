import axios from "axios";

const BASE_URL = "https://template-express-api.onrender.com/";

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
});

export default api;