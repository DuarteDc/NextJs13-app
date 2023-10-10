"use client"
import { FormEvent } from 'react';
import Image from 'next/image';
import { Input } from '@/infraestructure/components/ui/Input';

import { useAuth } from '@/domain/hooks/useAuth';

export default function ForgotPasswod() {

    const { resetPassword } = useAuth();

    const handleResetPassword = async (event: FormEvent) => {
        event.preventDefault();
        const res = await resetPassword({ email: event.target.email.value });
        alert(res)
    }

    return (
        <main className="bg-slate-950 text-white dark w-full overflow-hidden">
            <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen md:px-48 mx-auto px-5 max-w-[2500px] w-full">
                <div className="flex justify-center items-center w-full lg:px-10">
                    <Image
                        src="/reset-password.png"
                        alt="Forgot-password"
                        width="300"
                        quality={100}
                        height="300"
                        className="w-[40rem]"
                    />
                </div>
                <form className="m-auto" onSubmit={handleResetPassword}>
                    <h1 className="text-5xl xl:text-9xl font-bold">Forgot Password?</h1>
                    <h2 className="md:text-lg mb-10 mt-5">Enter your email assotiated with your account</h2>
                    <Input
                        label="Email"
                        name="email"
                        placeholder="mail@example.com"
                        type="email"
                    />
                    <button className="rounded-md mt-5 py-6 bg-rose-700 w-full font-bold hover:bg-rose-600 transition-all ease-out duration-150">
                        Next
                    </button>
                </form>
            </section>
        </main>
    )

}
