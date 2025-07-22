import axios from "axios";

const cache = new Map();
const API_BASE_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if(config.method === "get") {
      const cacheKey = JSON.stringify({
        url: config.url,
        params: config.params,
        headers: {
          Authorization: config.headers.Authorization,
        }
      });

      if(cache.has(cacheKey)) {
        config.adapter = () => {
          return Promise.resolve({
            ...cache.get(cacheKey),
            headers: config.headers,
            status: 200,
            statusText: "OK (cached",
            config
          });
        };
      }
    }

    if(token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);