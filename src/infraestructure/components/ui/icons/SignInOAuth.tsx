import { RedirectableProviderType } from 'next-auth/providers/index';
import { signIn } from 'next-auth/react';

interface Props {
    type: RedirectableProviderType;
    icon: JSX.Element;
}

export const SignInOAuth = ({ type, icon }: Props) => {
    return (
        <button onClick={() => signIn(type)} className="py-4 border-white border-2 lg:px-5 px-2 rounded-md flex flex-col justify-center items-center lg:w-[300px] cursor-pointer hover:bg-white transition-all duration-700 ease-in-out hover:text-black w-full">
            { icon }
            <span>Iniciar con Google</span>
        </button>
    )
}
