export interface PaginatedResponse<T> {
    data: T[],
    total: number;
    page: number;
    limit: number;
}

export interface PaginationArgs {
    page: number;
    limit: number;
}

export interface User {
    id: string;
    username: string;
}