import axios, { AxiosRequestHeaders } from 'axios';
import { getAuthToken, removeAuthToken } from './token.utils';
import Router from 'next/router';

const Axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
    timeout: 150000000,
    headers: {
        'Content-Type': 'application/json',
    },
});

Axios.interceptors.request.use(
    (config) => {
        const token = getAuthToken();
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token ? token : ''}`,
        } as unknown as AxiosRequestHeaders;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(`error` + error.message);
        if (
            (error.response && error.response.status === 401) ||
            (error.response && error.response.status === 403) ||
            (error.response &&
                error.response.data.errorcode === 3900)
        ) {
            if (typeof window !== 'undefined') {
                Router.push('/500');
            }
        }
        return Promise.reject(error);
    }
);

export class HttpClient {
    static async get<T>(url: string, params?: unknown) {
        const response = await Axios.get<T>(url, { params });
        return response.data;
    }
    static async post<T>(url: string, data: unknown, options?: any) {
        const response = await Axios.post<T>(url, data, options);
        return response.data;
    }
    static async put<T>(url: string, data: unknown) {
        const response = await Axios.put<T>(url, data);
        return response.data;
    }
}