import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
if (!baseUrl) {
    throw new Error("Variável de ambiente NEXT_PUBLIC_API_URL não definida.");
}

const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiClient;