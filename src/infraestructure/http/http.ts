const headers = {
    'Content-Type': 'application/json'
}

const get = async <T>(url: string): Promise<T> => {
    const response = await fetch(url, {
        method: 'GET',
        headers
    })
    return await response.json() as T
}


export const http = {
    get
}