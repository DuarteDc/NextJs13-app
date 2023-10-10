import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { http } from '../http/http';

import { User } from '@/domain/models/User';
import { RootState } from '../store/store';
import { LoginDto, LoginResponseDto, LoginUserByGoogleDto, ResetPasswordDto } from '../dto/auth/';

import { login } from '../store/reducers/auth/auth.reducer';

import { setCookie } from '../cookie/cookie';

export const signIn = (loginDto: LoginDto): ThunkAction<object, RootState, unknown, AnyAction> =>
    async dispatch => {
        try {
            const { token, user } = await http.post<LoginResponseDto, LoginDto>('/auth/login', loginDto);
            dispatch(login(new User(user._id, user.name, user.last_name, user.email)));
            setCookie('token', token);
        } catch (error) {
            console.log(error);
        }
    }

export const signInByGoogle = (loginUserByGoogleDto: LoginUserByGoogleDto): ThunkAction<object, RootState, unknown, AnyAction> =>
    async dispatch => {
        try {
            const { token, user } = await http.post<LoginResponseDto, any>('/auth/login-google', undefined, loginUserByGoogleDto);
            dispatch(login(new User(user._id, user.name, user.last_name, user.email)));
            setCookie('token', token);
        } catch (error) {
            console.log(error)
        }
    }

export const forgotPassword = (resetPasswordDto: ResetPasswordDto): ThunkAction<object, RootState, unknown, AnyAction> =>
    async dispatch => {
        try {
            const response = await http.post<any, ResetPasswordDto>('/auth/forgot-password', resetPasswordDto);
            return true;
        } catch (error) {
            throw error
        }
    }