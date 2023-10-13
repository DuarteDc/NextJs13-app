"use client"
import { signIn, useSession } from 'next-auth/react';

import { GoogleIcon, FacebookIcon } from '@/infraestructure/components/ui/icons';
import { FormLogin } from '@/infraestructure/components/auth/FormLogin';

export default function SignIn() {

    return (
        <main className="min-h-screen flex justify-center items-center bg-slate-950 w-full overflow-hidden px-5 py-10 dark">
            <section className="text-center text-white max-w-[1000px]">
                <div className="flex flex-col items-center mb-10">
                    <h1 className="font-bold text-5xl lg:text-7xl lg:mb-10">Login To Your Account</h1>
                    <span className="flex [&>button]:mx-2 lg:my-10 mt-8 [&>button]:text-xs">
                        <button onClick={() => signIn("google")} className="py-4 border-white border-1 lg:px-5 px-2 rounded-md flex justify-center items-center lg:w-[300px] cursor-pointer hover:bg-white transition-all duration-1000 ease-in-out hover:text-black w-full">
                            <GoogleIcon />
                            Login with Google
                        </button>
                        <button onClick={() => signIn("facebook")} className="py-4 border-white border-1 lg:px-5 px-2 rounded-md flex justify-center items-center lg:w-[300px] cursor-pointer hover:bg-white transition-all duration-1000 ease-in-out hover:text-black w-full">
                            <FacebookIcon />
                            Login with Facebook
                        </button>
                    </span>
                </div>
                <div className="flex justify-center items-center text-xl text-gray-400">
                    <hr className="w-6 mx-2 border-2 border-gray-500" />o<hr className="w-6 mx-2 border-2 border-gray-500" />
                </div>
                <FormLogin />
                <div>
                    <p className="text-gray-500 font-bold">Dont have an acount yet? <strong>Register Now</strong></p>
                </div>
            </section>
        </main>
    )
}