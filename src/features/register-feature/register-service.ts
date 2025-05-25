import { UserRegisterInputsInterface } from "/src/types/User/user-register-inputs-interface";
import apiClient from "/src/utils/api-client";

const saveUser = async (user: UserRegisterInputsInterface) => {
    try {
        let response = await apiClient.post('/api/register', user)
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        return false
    }
}

export {
    saveUser
}