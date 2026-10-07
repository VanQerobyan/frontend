import axios from "axios"
import { BASE_URL } from "./constants"

export const http = axios.create({
    baseURL: BASE_URL
})

http.interceptors.request.use((config) => {
    const token = localStorage.getItem("authToken")

    config.headers.Authorization = `Bearer ${token}`

    return config
})