import { ReactNode } from 'react';

interface Props {
    label: string;
    icon?: ReactNode;
    name: string;
    placeholder?: string;
    type?: types;
}
type types = "password" | "text" | "email";

export const Input = ({ label, name, placeholder, type = "text", icon }: Props) => {
    return (
        <div className="relative text-left">
            <label htmlFor={name}>{label}</label>
            <span className="flex items-center mt-2">
                <input className="placeholder:text-slate-800 block bg-zinc-800 w-full border border-none rounded-md px-5 py-6 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" placeholder={placeholder} type={type} name={name} autoComplete="false" />
                {
                    icon && (
                        <span className="absolute right-0 z-10 bg-zinc-800">
                            {icon}
                        </span>
                    )
                }
            </span>
        </div>

    )
}
