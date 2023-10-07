import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { RootState } from '../store/store';
import { getAllUsers } from '../store/reducers/user.reducer';

import { http } from '../../infraestructure/http/http';
import { UserDto } from '../../infraestructure/dto/User.dto';

import { User } from '../../domain/models/User';

export const getUsers = (): ThunkAction<object, RootState, unknown, AnyAction> =>
    async dispatch => {
        try {
            const response = await http.get<Array<UserDto>>('/api/products');
            const users = response.map(({ _id, name, email, last_name }) => new User(_id, name, last_name, email));
            dispatch(getAllUsers(users));
        } catch (error) {
            console.log(error);
        }
    }
