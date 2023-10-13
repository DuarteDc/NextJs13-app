import { useState } from 'react';

import { authService } from '../services/auth.service';
import { useAppDispatch } from '@/infraestructure/store/hooks';

import { LoginDto, LoginUserByGoogleDto, ResetPasswordDto } from '@/infraestructure/dto/auth';

export const useAuth = () => {

    const [loading, setLoading] = useState(false);

    const { signIn, signInByGoogle, forgotPassword } = authService();

    const dispatch = useAppDispatch();

    const loginUser = async (loginDto: LoginDto) => {
        setLoading(true);
        await dispatch(signIn(loginDto));
        setLoading(false);
    }

    const loginUserByGoogle = async (loginUserByGoogleDto: LoginUserByGoogleDto) => await dispatch(signInByGoogle(loginUserByGoogleDto));

    const resetPassword = async (resetPasswordDto: ResetPasswordDto) => await dispatch(forgotPassword(resetPasswordDto));


    return {
        loginUser,
        loginUserByGoogle,
        resetPassword,
        loading
    }


}