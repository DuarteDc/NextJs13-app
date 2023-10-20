import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoriesData } from '@/domain/models/category/interfaces/categories-data.interface';

interface InitialState {
    categories: CategoriesData | {},
}

const initialState: InitialState = {
    categories: {},
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        getAllCategories: (state, action: PayloadAction<CategoriesData>) => {
            state.categories = action.payload;
        }
    }
});

export const { getAllCategories } = categorySlice.actions;

export default categorySlice.reducer;