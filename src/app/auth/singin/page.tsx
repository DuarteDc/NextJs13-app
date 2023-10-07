"use client";
import { useGoogleLogin } from '@react-oauth/google';

import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { EmailIcon, GoogleIcon, EyeOff } from '@/infraestructure/components/ui/icons';
import { FormEvent } from 'react';
import { useAuth } from '@/domain/hooks/useAuth';
import { useAppSelector } from '@/infraestructure/store/hooks';

export default function SignIn() {

    const { loginUser, loginUserByGoogle } = useAuth();
    const { user } = useAppSelector(state => state.authReducer)

    const login = useGoogleLogin({
        onSuccess: token => loginUserByGoogle({ AuthorizationGoogleToken: token.access_token })
    });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // const data = {
        //     email: event.target.email.value,
        //     password: event.target.password.value
        // }
        // loginUser(data)
    }

    return (
        <main className="grid grid-cols-2 min-h-screen justify-center items-center bg-slate-900 dark">
            <section className="mx-28 text-center text-white">
                <div className="flex flex-col items-center mb-10">
                    <h1 className="font-bold text-6xl uppercase mb-10">Welcome Back</h1>
                    <button onClick={() => login()} className="py-4 border-white border-1 px-5 rounded-md flex items-center">
                        <GoogleIcon />
                        Sign in with Google
                    </button>
                </div>
                <hr />
                <form className="my-40" onSubmit={handleSubmit}>
                    <Input type="email" label="Email" className="my-5" size="lg" radius="sm" id="email" endContent={<EmailIcon />} />
                    <Input type="password" label="Name" className="my-5" size="lg" radius="sm" id="password" endContent={<EyeOff />} />
                    <Button className="w-full py-8 font-bold text-lg bg-rose-600" size="lg" radius="sm" type="submit">
                        Sign in
                    </Button>
                    <span className="flex flex-row-reverse mt-5 mr-5 underline cursor-pointer text-gray-400">
                        Forgot password
                    </span>
                </form>
                <div>
                    <p className="text-gray-500">Don't have an acount yet?</p>
                </div>
            </section>
            <section className="text-white">
                {
                    user && <code>{JSON.stringify(user, null, 3)}</code>
                }
            </section>
        </main>
    )
}