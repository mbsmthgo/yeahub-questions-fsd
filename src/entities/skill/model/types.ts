import type {SpecializationListItem} from '@/entities/specialization/model/types';
import type {PaginationArgs, User} from "@/shared/api";

export interface SkillListItem {
    id: number;
    title: string;
    description: string;
    imageSrc: null | string;
    createdAt: string;
    updatedAt: string;
    createdBy: null | User;
    specializations: SpecializationListItem[];
}

export interface SkillsQueryArgs extends PaginationArgs {
    page: number;
    limit: number;
}