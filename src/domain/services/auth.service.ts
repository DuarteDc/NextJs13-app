import { signIn, signInByGoogle } from '@/infraestructure/repositories/auth.repository';

export const authService = () => {
    return {
        signIn,
        signInByGoogle,
    }
}