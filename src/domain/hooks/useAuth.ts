import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { authService } from '../services/auth.service';
import { useAppDispatch } from '@/infraestructure/store/hooks';

import { LoginDto, LoginUserByGoogleDto, ResetPasswordDto } from '@/infraestructure/dto/auth';

import { SignInOptions, signIn as signInNextAuth } from 'next-auth/react';
import { errorNotification } from '@/infraestructure/alerts/alerts';

export const useAuth = () => {

    const router = useRouter();
    const dispatch = useAppDispatch();

    const [loading, setLoading] = useState(false);

    const { signIn, forgotPassword } = authService();

    const loginUser = async (loginDto: LoginDto) => {
        setLoading(true);
        await dispatch(signIn(loginDto));
        setLoading(false);
    }

    const signInByCredentials = async (options: SignInOptions) => {
        setLoading(true)
        const response = await signInNextAuth('credentials', options);
        if (response?.ok) return router.push('/');
        errorNotification('El usuario o contraseña no son correctos');
        setLoading(false)

    }

    const resetPassword = async (resetPasswordDto: ResetPasswordDto) => {
        setLoading(true);
        if (await forgotPassword(resetPasswordDto))
            return router.push('/auth/signin')

        return setLoading(false)

    }

    return {
        loginUser,
        signInByCredentials,
        resetPassword,
        loading
    }


}