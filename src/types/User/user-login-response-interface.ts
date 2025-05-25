export interface UserLoginResponseInterface {
    accessToken: string;
    tokenType: string;
    user: {
        id: number;
        name: string;
        email: string;
        roles: string[];
    }
} 