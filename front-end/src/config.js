import axios from 'axios';

export const axiosInstance = axios.create({
    baseUrl : "http://localhost:3000/getWeather",
    serverUrl: "http://localhost:8000/getWeather"
})