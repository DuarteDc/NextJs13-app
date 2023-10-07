import Cookies from 'js-cookie';

interface CookieOptions {
    path: string,
    expires: number,
    domain: string;
}

export const setCookie = (name: string, value: string, options?: CookieOptions) => Cookies.set(name, JSON.stringify(value), options ?? undefined);


export const getCookie = (name: string) => Cookies.get(name);

export const removeCookie = (name: string) => Cookies.remove(name);