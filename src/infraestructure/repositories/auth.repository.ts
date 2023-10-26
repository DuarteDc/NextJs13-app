import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { http } from '../http/http';

import { User } from '@/domain/models/User';
import { RootState } from '../store/store';
import { LoginDto, LoginResponseDto, LoginUserByGoogleDto, ResetPasswordDto } from '../dto/auth/';

import { login } from '../store/reducers/auth/auth.reducer';
import { setCookie } from '../cookie/cookie';
import { errorNotification, successNotification } from '../alerts/alerts';

export const signIn = (loginDto: LoginDto): ThunkAction<object, RootState, unknown, AnyAction> =>
    async dispatch => {
        try {
            const { token, user } = await http.post<LoginResponseDto>('/auth/login', loginDto);
            dispatch(login(new User(user._id, user.name, user.last_name, user.email)));
            setCookie('token', token);
        } catch (error) {
            console.log(error)
        }
    }

export const signInByGoogle = async (loginUserByGoogleDto: LoginUserByGoogleDto) => {
        try {
            return await http.post<LoginResponseDto>('/auth/login-google', undefined, loginUserByGoogleDto);
            // setCookie('token', token);
        } catch (error) {
            console.log(error)
        }
    }

export const forgotPassword = async(resetPasswordDto: ResetPasswordDto) => {
        try {
            const { message } = await http.post<any>('/auth/forgot-password', resetPasswordDto);
            successNotification(message);
            return true;
        } catch (error) {
            return errorNotification(error as string);
        }
    }

export const signInNextAuth = async (loginDto: LoginDto) => {
    try {
        return await http.post<LoginResponseDto>('/auth/login', loginDto);
    } catch (error) {
        return errorNotification(error as string);
    }
}
