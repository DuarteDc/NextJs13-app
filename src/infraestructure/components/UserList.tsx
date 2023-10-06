'use client'
import React, { useEffect, useState } from 'react'
import { User } from '@/domain/models/User';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import Image from 'next/image';
import { useUser } from '@/domain/hooks/useUser';
import { useAppSelector } from '../store/hooks';

const UserList = () => {

    const { users } = useAppSelector(state => state.userReducer);
    const { getAll } = useUser();

    useEffect(() => {
        getAll()
    }, []);

    return (
        <>
            {
                users.map(({ _id, name }) => (
                    <Card>
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">Daily Mix</p>
                            <small className="text-default-500 truncate">{name}</small>
                            <h4 className="font-bold text-large">Frontend Radio</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="https://nextui.org/images/hero-card-complete.jpeg"
                                width={270}
                                height={270}
                            />
                        </CardBody>
                    </Card >
                ))
            }
        </>
    )
}

export default UserList