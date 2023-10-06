import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: []
    },
    reducers: {
        getAllUsers: (state, action: PayloadAction<any>) => {
            state.users = action.payload;
        }
    }
})

export const { getAllUsers } = userSlice.actions;

export default userSlice.reducer;