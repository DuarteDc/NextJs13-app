import { User } from '@/domain/models/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        logged: false,
    },
    reducers: {
        login: (state, action: PayloadAction<User>) =>{
            state.user = action.payload;
            state.logged = true;
        }
    }   
})

export const { login } = authSlice.actions;

export default authSlice.reducer;