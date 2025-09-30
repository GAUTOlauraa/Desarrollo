import axios from "axios";

const BASE_URL = "https://template-express-api.onrender.com/";
const PELICULAS_URL = "https://api.tvmaze.com";

export const peliculasApi = axios.create({
    baseURL: PELICULAS_URL,
    timeout: 5000,
});

export const registerApi = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
});

