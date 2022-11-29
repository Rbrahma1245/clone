import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://mamakoo-api.mithyalabs.com/api/",
});
