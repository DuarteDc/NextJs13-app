type Category = {
    _id         : string;
    name        : string;
    slug        : string;
    status      : boolean;
    createdAt   : Date;
    updatedAt   : Date;
}

export type CategoriesResponse = {
    docs            : Array<Category>;
    totalDocs       : number;
    offset          : number;
    limit           : number;
    totalPages      : number;
    page            : number;
    pagingCounter   : number;
    hasPrevPage     : boolean;
    hasNextPage     : boolean;
    prevPage        : null | number;
    nextPage        : null | number;
}