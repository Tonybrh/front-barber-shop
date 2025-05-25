import { UserLoginInputsInterface } from "/src/types/User/user-login-inputs-interface";
import { UserLoginResponseInterface } from "/src/types/User/user-login-response-interface";
import apiClient from "/src/utils/api-client";
import Cookies from 'js-cookie';

const loginUser = async (user: UserLoginInputsInterface): Promise<UserLoginResponseInterface | false> => {
    try {
        let response = await apiClient.post<UserLoginResponseInterface>('/api/login', user)
        if (response.data) {
            // Store the token in cookies
            Cookies.set('token', response.data.accessToken, { 
                expires: 7, // 7 days
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            });
            
            // Store user data in cookies
            Cookies.set('user', JSON.stringify(response.data.user), {
                expires: 7,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            });
            
            return response.data;
        }
        return false;
    } catch (error) {
        return false;
    }
}

export {
    loginUser
} 