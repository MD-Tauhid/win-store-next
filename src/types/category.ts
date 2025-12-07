export interface category {
    id: number | string;
    name: string;
}

export interface CategoryResponse {
    data: category[];
    message: string;
    success: boolean;
}