'use client'
import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { successAlert } from '@/infraestructure/alerts/alerts';

export const useWishList = () => {

    const { getItem, setItem } = useLocalStorage();
    const [existInWishList, setExistInWishList] = useState(false);


    const WISHLIST = getItem('wish_list') as Array<string> || [];

    const verifyInWishList = (product_id: string) => {
        const product = WISHLIST.find(product => product === product_id);
        if (product) setExistInWishList(true);
    }

    const addAndRemoveFromWishList = (product_id: string) => {

        if (WISHLIST.find(product => product === product_id)) {
            setExistInWishList(false);
            successAlert('Producto eliminado de la list')
            return setItem('wish_list', WISHLIST.filter(product => product !== product_id))
        }

        WISHLIST.push(product_id);
        setItem('wish_list', WISHLIST)
        successAlert('Producto agregado a la list')
        return setExistInWishList(true);
    }

    return { addAndRemoveFromWishList, existInWishList, verifyInWishList }

}
