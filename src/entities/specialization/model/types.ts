import type {PaginationArgs, User} from "@/shared/api";

export interface SpecializationListItem {
    id: number;
    title: string;
    slug: string;
    description: string;
    imageSrc: null | string;
    createdAt: string;
    updatedAt: string;
    createdBy: null | User;
}

export interface SpecializationsQueryArgs extends PaginationArgs {
    page: number;
    limit: number;
}