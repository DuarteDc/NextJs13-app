import { ReactNode } from 'react';
import { useForm, type UseFormRegister, type FieldError } from 'react-hook-form';

type types = "password" | "text" | "email";
type autoComplete = "off" | "on"
interface Props {
    label: string;
    icon?: ReactNode;
    name: string;
    placeholder?: string;
    type?: types;
    register: UseFormRegister<any>
    error: any;
    autoComplete?: autoComplete;
}

export const Input = ({ label, name, placeholder, type = "text", icon, register, error, autoComplete = "on" }: Props) => {
    return (
        <div className="relative text-left my-3">
            <label htmlFor={name}>{label}</label>
            <span className="flex items-center mt-2">
                <input
                    className="placeholder:text-zinc-600 bg-zinc-800 w-full border border-none rounded-md px-5 py-4 lg:py-6 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                    autofill:shadow-[inset_0_0_0px_1000px_rgb(39,39,42)] autofill:text-white"
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    type={type} 
                    {...register(name, { required: true })}
                />
                {
                    icon && (
                        <span className="absolute right-0 z-10 bg-zinc-800">
                            {icon}
                        </span>
                    )
                }
            </span>
             {
                error &&<p className="my-2 text-sm text-red-500">{error}</p>
             }
        </div>

    )
}
