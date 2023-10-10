import { signIn, signInByGoogle, forgotPassword } from '@/infraestructure/repositories/auth.repository';

export const authService = () => {
    return {
        signIn,
        signInByGoogle,
        forgotPassword
    }
}