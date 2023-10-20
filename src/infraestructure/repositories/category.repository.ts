import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { RootState } from '../store/store';

import { http } from '../../infraestructure/http/http';

import { CategoriesResponse } from '../dto/category/GetAllCategoriesResponse.dto';
import { Category } from '@/domain/models/category/category.model';
import { getAllCategories } from '../store/reducers/category/category.reducer';

export const getCategories = (): ThunkAction<object, RootState, unknown, AnyAction> =>
    async dispatch => {
        try {
            const { docs, ...response } = await http.get<CategoriesResponse>('/categories');
            const categories = docs.map(({ _id, name, slug, status, createdAt, updatedAt }) => new Category(_id, name, slug, status, createdAt, updatedAt));
            dispatch(getAllCategories({ categories, ...response }));
        } catch (error) {
            console.log(error);
        }
    }
