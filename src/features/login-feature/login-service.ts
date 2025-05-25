import { UserLoginInputsInterface } from "/src/types/User/user-login-inputs-interface";
import apiClient from "/src/utils/api-client";

const loginUser = async (user: UserLoginInputsInterface) => {
    try {
        let response = await apiClient.post('/api/login', user)
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        return false
    }
}

export {
    loginUser
} 