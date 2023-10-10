import { LoginDto, LoginUserByGoogleDto, ResetPasswordDto } from '@/infraestructure/dto/auth';
import { useAppDispatch } from '@/infraestructure/store/hooks';
import { authService } from '../services/auth.service';


export const useAuth = () => {

    const { signIn, signInByGoogle, forgotPassword } = authService();

    const dispatch = useAppDispatch();

    const loginUser = async(loginDto: LoginDto) => await dispatch(signIn(loginDto));

    const loginUserByGoogle = async (loginUserByGoogleDto: LoginUserByGoogleDto) => await dispatch(signInByGoogle(loginUserByGoogleDto));

    const resetPassword = async (resetPasswordDto: ResetPasswordDto) => {
        return await dispatch(forgotPassword(resetPasswordDto));
    }

    return {
        loginUser,
        loginUserByGoogle,
        resetPassword
    }


}