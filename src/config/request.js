import axios from "axios";
import { loadState } from "./Storage";

const request = axios.create({
    baseURL: 'https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts',
    params: {
      username_or_id_or_url: 'mrbeast'
    },
    headers: {
      'x-rapidapi-key': 'fa94bc5737msh1e53b88418f8ff8p1372f8jsn0fdb4d889364',
      'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
    }
});

request.interceptors.request.use((config) => {
    const user = loadState("token");
    config.headers.Authorization = `Bearer ${user}`;
    return config;
});

export { request };
