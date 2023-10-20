import { getCategories } from '@/infraestructure/repositories/category.repository';

export const categoryService = () => {
    return {
        getCategories
    }
}