"use client";
// import { useGoogleLogin } from '@react-oauth/google';
import Link from 'next/link';

import { Input } from '@/infraestructure/components/ui/Input';
import { EmailIcon, GoogleIcon, EyeOff, FacebookIcon } from '@/infraestructure/components/ui/icons';
import { FormEvent } from 'react';
import { useAuth } from '@/domain/hooks/useAuth';
import { useAppSelector } from '@/infraestructure/store/hooks';
import { signIn } from 'next-auth/react';



export default function SignIn() {

    const { loginUser, loginUserByGoogle } = useAuth();
    const { user } = useAppSelector(state => state.authReducer)

    const login = async () => {
        const xd = await signIn("google");
        console.log(xd);
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const data = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        loginUser(data)
    }

    return (
        <main className="min-h-screen flex justify-center items-center bg-slate-950">
            <section className="text-center text-white max-w-[1000px]">
                <div className="flex flex-col items-center mb-10">
                    <h1 className="font-bold text-6xl mb-10">Login To Your Account</h1>
                    <span className="flex [&>button]:mx-2 my-10">
                        <button onClick={() => login()} className="py-4 border-white border-1 px-5 rounded-md flex justify-center items-center w-[300px] cursor-pointer hover:bg-white transition-all duration-1000 ease-in-out hover:text-black">
                            <GoogleIcon />
                            Login with Google
                        </button>
                        <button onClick={() => login()} className="py-4 border-white border-1 px-5 rounded-md flex justify-center items-center w-[300px] cursor-pointer hover:bg-white transition-all duration-1000 ease-in-out hover:text-black">
                            <FacebookIcon />
                            Login with Facebook
                        </button>
                    </span>
                </div>
                <div className="flex justify-center items-center text-xl text-gray-400">
                    <hr className="w-6 mx-2 border-2 border-gray-500" />O<hr className="w-6 mx-2 border-2 border-gray-500" />
                </div>
                <form className="mb-40 mt-10" onSubmit={handleSubmit}>
                    <Input
                        label="Correo"
                        name="email"
                        type="email"
                        placeholder="mail@example.com"
                        icon={<EmailIcon />}
                    />
                    <Input
                        label="Contraseña"
                        name="password"
                        icon={<EyeOff />}
                        type="password"
                    />
                    <span className="flex flex-row-reverse mt-5 mr-5 cursor-pointer text-gray-400 font-bold text-base">
                        <Link href="/auth/forgot-password">
                            Forgot password?
                        </Link>
                    </span>
                    <button className="rounded-md mt-5 py-6 bg-rose-700 w-full font-bold hover:bg-rose-600 transition-all ease-out duration-150">
                        Iniciar sesion
                    </button>
                </form>
                <div>
                    <p className="text-gray-500 font-bold">Don't have an acount yet? <strong>Register Now</strong></p>
                </div>
            </section>
        </main>
    )
}