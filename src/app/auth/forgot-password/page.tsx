"use client"
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '@/infraestructure/components/ui/Input';
import { useAuth } from '@/domain/hooks/useAuth';
import { ResetPasswordDto } from '@/infraestructure/dto/auth';

import { forgotPasswordValidations } from '@/domain/validations/auth/auth.validations';

export default function ForgotPasswod() {

    const { resetPassword, loading } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordDto>({ resolver: yupResolver(forgotPasswordValidations) });

    return (
        <main className="bg-slate-950 text-white dark w-full overflow-hidden">
            <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen md:px-48 mx-auto px-5 max-w-[2500px] w-full">
                <div className="flex -ml-16 items-center w-full lg:px-10 mt-20 lg:mt-0">
                    <Image
                        src="/reset-password.png"
                        alt="Forgot-password"
                        width="800"
                        height="800"
                        className="w-[80rem]"
                    />
                </div>
                <form className="m-auto" onSubmit={handleSubmit(resetPassword)} method="post">
                    <h1 className="text-5xl xl:text-9xl font-bold">¿Olvidaste tu contraseña?</h1>
                    <h2 className="md:text-lg mb-10 mt-5">Ingresa el correo asociado con tu cuenta</h2>
                    <Input
                        label="Correo"
                        name="email"
                        placeholder="mail@example.com"
                        type="email"
                        autoComplete="off"
                        register={register}
                        error={errors?.email?.message}
                    />
                    <button 
                        className="rounded-md mb-10 mt-5 lg:py-6 py-4 bg-rose-700 w-full font-bold hover:bg-rose-600 transition-all ease-out duration-150 flex justify-center"
                        disabled={loading}
                        >
                        Continuar
                    </button>
                </form>
            </section>
        </main>
    )

}
