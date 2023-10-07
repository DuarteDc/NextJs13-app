import { LoginDto, LoginUserByGoogleDto } from '@/infraestructure/dto/auth';
import { useAppDispatch } from '@/infraestructure/store/hooks';
import { authService } from '../services/auth.service';


export const useAuth = () => {

    const { signIn, signInByGoogle } = authService();

    const dispatch = useAppDispatch();

    const loginUser = (loginDto: LoginDto) => dispatch(signIn(loginDto));

    const loginUserByGoogle = (loginUserByGoogle: LoginUserByGoogleDto) => dispatch(signInByGoogle(loginUserByGoogle))

    return {
        loginUser,
        loginUserByGoogle
    }


}