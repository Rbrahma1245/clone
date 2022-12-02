import { axiosInstance } from "./axiosInstance";

class AuthService {
    static login(email: string, password: string) {
        return axiosInstance.post(`users/login`, { email, password });
    }

    static signup(userName: string, email: string, password: string) {
        return axiosInstance.post(`users/signupAuth`, { userName, email, password });
    }

    static profile() {
        return axiosInstance.get(`users/me`, {
            headers: {
                Authorization: localStorage.access_token
            }
        });
    }



}

export default AuthService;
