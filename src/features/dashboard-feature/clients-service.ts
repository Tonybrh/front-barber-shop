import { Client } from "/src/types/Client/client-interface";
import apiClient from "/src/utils/api-client";
import Cookies from 'js-cookie';

const getClients = async (): Promise<Client[]> => {
    try {
        const token = Cookies.get('token');
        const response = await apiClient.get<Client[]>('/api/clients', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching clients:', error);
        return [];
    }
}

export {
    getClients
} 