import { useAppDispatch } from '@/infraestructure/store/hooks';

import { userService } from '../services/user.service';

export const useUser = () => {
    const { getUsers } = userService();

    const dispatch = useAppDispatch();

    const getAll = async () => await dispatch(getUsers());

    return {
        getAll
    }

}