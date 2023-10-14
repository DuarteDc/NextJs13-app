import axios, { isAxiosError } from 'axios';
import { getCookie } from '@/infraestructure/cookie/cookie';

const apiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    responseType: 'json',
});

apiInstance.interceptors.request.use(
    async config => {
        const token = getCookie('token')
        if (token)
            config.headers.token = token
        return config
    },
    error => {
        return Promise.reject(error)
    }
);

const get = async <T>(url: string): Promise<T> => {
    try {
        const { data } = await apiInstance.get(url);
        return data as T;
    } catch (error) {
        if (isAxiosError(error))
            throw error.response?.data;

        throw new Error("Parece que hubo un error -  Intenta mas tarde");
    }
}

const post = async <T, K>(url: string, body: K, headers?: object): Promise<T> => {
    try {
        const { data } = await apiInstance.post(url, body, {
            headers: {
                ...headers
            }
        });
        return data as T;
    } catch (error) {
        if (isAxiosError(error)) throw error.response?.data?.message;
        
        throw new Error("Parece que hubo un error -  Intenta mas tarde");
    }
}



export const http = {
    get,
    post
}