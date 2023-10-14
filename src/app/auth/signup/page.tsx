"use client"
import { Input } from "@/infraestructure/components/ui/Input";
import { FacebookIcon, GoogleIcon } from "@/infraestructure/components/ui/icons";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignUp() {

    const { register, formState: { errors } } = useForm()

    return (
        <main className="min-h-screen flex items-center justify-center">
            <section className="max-w-[1000px] w-full">
                <h1 className="text-5xl lg:text-7xl font-bold text-center my-20">Crear Cuenta</h1>
                <div className="flex flex-col items-center my-10">
                    <span className="flex [&>button]:mx-2 lg:mt-10 [&>button]:text-xs [&>button]:md:text-base [&>button]:lg:py-6">
                        <button onClick={() => console.log("google")} className="py-4 border-white border-2 px-5 rounded-md flex flex-col lg:flex-row justify-center items-center lg:w-[300px] cursor-pointer hover:bg-white transition-all duration-700 ease-in-out hover:text-black w-full">
                            <GoogleIcon />
                            Continuar con Google
                        </button>
                        <button onClick={() => console.log("facebook")} className="py-4 border-white border-2 px-5 rounded-md flex flex-col lg:flex-row justify-center items-center lg:w-[300px] cursor-pointer hover:bg-white transition-all duration-700 ease-in-out hover:text-black w-full">
                            <FacebookIcon />
                            Continuar con Facebook
                        </button>
                    </span>
                </div>
                <div className="flex justify-center items-center text-xl text-gray-400 my-10 lg:mt-0 mb-2">
                    <hr className="w-20 lg:w-28 mx-2 border-2 border-gray-500" />o<hr className="w-20 lg:w-28 mx-2 border-2 border-gray-500" />
                </div>
                <form>
                    <Input
                        label="Nombre"
                        name="name"
                        type="text"
                        placeholder="Nombre"
                        register={register}
                        error={errors.email?.message}
                    />
                    <Input
                        label="Apellido"
                        name="lastname"
                        type="text"
                        placeholder="Apellido"
                        register={register}
                        error={errors.email?.message}
                    />
                    <Input
                        label="Correo"
                        name="email"
                        type="email"
                        placeholder="example@mail.com"
                        register={register}
                        error={errors.email?.message}
                    />
                    <Input
                        label="Contraseña"
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        register={register}
                        error={errors.email?.message}
                    />
                    <button
                        className="rounded-md mb-10 lg:mb-16 lg:mt-10 mt-5 lg:py-6 py-4 bg-rose-700 w-full font-bold hover:bg-rose-600 transition-all ease-out duration-150"
                    >
                        Registrarme
                    </button>
                </form>
                <div className="text-gray-500 font-bold text-center mb-20">
                    ¿Ya tienes cuenta?
                    <Link href="/auth/signin">
                        <strong> Iniciar sesión</strong>
                    </Link>
                </div>
            </section>
        </main>
    )
}