'use client'
export const useLocalStorage = () => {

    const getItem = (key: string): any => {
        const item = window.localStorage.getItem(key);
        if ( !item ) return setItem(key, []);
        return JSON.parse( item );
    }

    const setItem = (key: string, value: any) => {
        const data = JSON.stringify(value);
        window.localStorage.setItem(key, data);
        return getItem(key);
    }

    return { getItem, setItem }
}
