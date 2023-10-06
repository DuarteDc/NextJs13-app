import { getUsers } from '@/infraestructure/repositories/user.repository';

export const userService = () => {
    return {
        getUsers,
    }
}