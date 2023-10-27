'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';

import { useWishList } from '@/domain/hooks/useWishList';
import { HeartIcon, ShareIcon } from '../ui/icons';
import { shareProduct } from '@/domain/helpers/clipboard.helper';

export const ProductOptions = () => {

    const { slug } = useParams();

    const { existInWishList, addAndRemoveFromWishList, verifyInWishList } = useWishList();

    useEffect(() => {
        verifyInWishList(slug as string)
    }, []);

    return (
        <div className="flex justify-end [&>button]:mx-2">
            <button
                onClick={() => shareProduct()}
                className={`flex text-white items-center bg-slate-800/40 rounded-xl p-2 hover:border-rose-600 border-[3px] 
                border-slate-800/40 transition-all ease-in duration-300 cursor-pointer relative`}
            >
                <ShareIcon />
            </button>
            <button
                onClick={() => addAndRemoveFromWishList(slug as string)}
                className={`flex items-center bg-slate-800/40 rounded-xl p-2 hover:border-rose-600 border-[3px]
                border-slate-800/40 transition-all ease-in duration-300 cursor-pointer relative ${existInWishList ? 'text-rose-600' : 'text-white'}`}
            >
                <HeartIcon />
            </button>
        </div>
    )
}
