import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { authService } from '../services/auth.service';
import { useAppDispatch } from '@/infraestructure/store/hooks';

import { LoginDto, LoginUserByGoogleDto, ResetPasswordDto } from '@/infraestructure/dto/auth';

export const useAuth = () => {

    const router = useRouter();
    const dispatch = useAppDispatch();

    const [ loading, setLoading ] = useState(false);

    const { signIn, forgotPassword } = authService();

    const loginUser = async (loginDto: LoginDto) => {
        setLoading(true);
        await dispatch(signIn(loginDto));
        setLoading(false);
    }

    // const loginUserByGoogle = async (loginUserByGoogleDto: LoginUserByGoogleDto) => await dispatch(signInByGoogle(loginUserByGoogleDto));

    const resetPassword = async (resetPasswordDto: ResetPasswordDto) => {
        setLoading(true);
        if ( await forgotPassword(resetPasswordDto) )
            return router.push('/auth/signin')
        setLoading(false)
    }

    return {
        loginUser,
        // loginUserByGoogle,
        resetPassword,
        loading
    }


}