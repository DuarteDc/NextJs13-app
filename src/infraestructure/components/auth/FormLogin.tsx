"use client"
import Link from 'next/link';

import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '@/domain/hooks/useAuth';
import { LoginDto } from '@/infraestructure/dto/auth';

import { loginAuthValidation } from '@/domain/validations/auth/auth.validations';

import { signIn } from 'next-auth/react';
import { Input } from '../ui/Input';

export const FormLogin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginDto>({ resolver: yupResolver(loginAuthValidation) });

    const onSubmit: SubmitHandler<LoginDto> = ({ email, password }) => signIn('credentials', { email, password });

    const { loading } = useAuth();

    return (
        <form className="lg:mb-40 mt-10" onSubmit={handleSubmit(onSubmit)} method="post">
            <Input
                label="Correo"
                name="email"
                type="email"
                placeholder="mail@example.com"
                register={register}
                error={errors.email?.message}
            />
            <Input
                label="Contraseña"
                name="password"
                type="password"
                register={register}
                error={errors.password?.message}
                placeholder="Contraseña"
            />
            <span className="flex flex-row-reverse w-full mt-5 mr-5 cursor-pointer text-gray-400 font-bold text-sm">
                <Link href="/auth/forgot-password">
                    Olvide mi contraseña
                </Link>
            </span>
            <button
                className="rounded-md mb-10 mt-5 lg:py-6 py-4 bg-rose-700 w-full font-bold hover:bg-rose-600 transition-all ease-out duration-150"
                disabled={loading}
            >
                {!loading ? 'Login' : 'cargando'}
            </button>
        </form>
    )
}
