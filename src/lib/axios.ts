import axios from "axios";

export const apiWakaTime = axios.create({
  baseURL: "https://wakatime.com/api/v1",
  headers: {
    Authorization: `Basic ${import.meta.env.VITE_WAKATIME_API_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiWakaTime.interceptors.response.use(
  (config) => {
    const apiKey = import.meta.env.VITE_WAKATIME_API_KEY;
    console.log("API Key:", apiKey); // Debugging line
    if (!apiKey) {
      throw new Error("API key for WakaTime is missing");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiWakaTime;
