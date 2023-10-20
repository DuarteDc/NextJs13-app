import { Category } from '../category.model';

export interface CategoriesData {
    categories      : Array<Category>
    totalDocs       : number;
    limit           : number;
    totalPages      : number;
    page            : number;
    hasPrevPage     : boolean;
    hasNextPage     : boolean;
}