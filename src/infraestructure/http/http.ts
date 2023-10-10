const defaultHeaders = {
    'Content-Type': 'application/json'
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const get = async <T>(url: string): Promise<T> => {
    const response = await fetch(BASE_URL + url, {
        method: 'GET',
        headers: defaultHeaders
    })
    return await response.json() as T
}

const post = async <T, K>(url: string, body: K, headers?: object): Promise<T> => {
    const response = await fetch(BASE_URL + url, {
        method: 'POST',
        headers: {
            ...defaultHeaders,
            ...headers,
        },
        body: JSON.stringify(body),
    })
    return await response.json() as T
}



export const http = {
    get,
    post
}