"use client"
import { signIn, useSession } from 'next-auth/react';

import { GoogleIcon, FacebookIcon } from '@/infraestructure/components/ui/icons';
import { FormLogin } from '@/infraestructure/components/auth/FormLogin';
import Link from 'next/link';

export default function SignIn() {

    return (
        <main className="min-h-screen flex items-center justify-center overflow-hidden px-5 lg:py-10">
            <section className="text-center max-w-[1000px] flex flex-col justify-center">
                <div className="flex flex-col items-center mb-10">
                    <h1 className="font-bold text-5xl lg:text-7xl lg:mb-10">Iniciar Sesión</h1>
                    <span className="flex [&>button]:mx-2 lg:my-10 mt-8 [&>button]:text-xs [&>button]:md:text-base [&>button]:lg:py-6">
                        <button onClick={() => signIn("google")} className="py-4 border-white border-2 lg:px-5 px-2 rounded-md flex flex-col justify-center items-center lg:w-[300px] cursor-pointer hover:bg-white transition-all duration-700 ease-in-out hover:text-black w-full">
                            <GoogleIcon />
                            Iniciar con Google
                        </button>
                        <button onClick={() => signIn("facebook")} className="py-4 border-white border-2 lg:px-5 px-2 rounded-md flex flex-col justify-center items-center lg:w-[300px] cursor-pointer hover:bg-white transition-all duration-700 ease-in-out hover:text-black w-full">
                            <FacebookIcon />
                            Iniciar con Facebook
                        </button>
                    </span>
                </div>
                <div className="flex justify-center items-center text-xl text-gray-400">
                    <hr className="w-20 lg:w-28 mx-2 border-2 border-gray-500" />o<hr className="w-20 lg:w-28 mx-2 border-2 border-gray-500" />
                </div>
                <FormLogin />
                <div className="text-gray-500 font-bold">
                    ¿No tienes cuenta?
                    <Link href="/auth/signup">
                        <strong> Crear cuenta</strong>
                    </Link>
                </div>
            </section>
        </main>
    )
}