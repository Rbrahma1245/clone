import { axiosInstance } from "./axiosInstance";

class AuthService {
    static login(email: string, password: string) {
        return axiosInstance.post(`users/login`, { email, password });
    }

    static signup(userName: string, email: string, password) {
        return axiosInstance.post(`users/signupAuth`, { userName, email, password });
    }
}

export default AuthService;
