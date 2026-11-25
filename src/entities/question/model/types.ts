import type {User} from "@/shared/api";
import type {SpecializationListItem} from "@/entities/specialization";
import type {SkillListItem} from "@/entities/skill";

export interface QuestionListItem {
    id: number;
    title: string;
    shortAnswer: string;
    rate: number;
    complexity: number;
}

export interface QuestionsQueryArgs {
    page: number;
    limit: number;
    specializationId?: number;
    skills?: string[];
    complexity?: number[];
    rate?: number[];
    titleOrDescription?: string;
    skillFilterMode: 'ALL' | 'ANY';
}

interface QuestionTopic {
    id: number;
    title: string;
    description: string;
    imageSrc: null | string;
    createdAt: string;
    updatedAt: string;
}

export interface QuestionFull extends QuestionListItem {
    slug: string;
    description: string;
    code: null | string;
    imageSrc: null | string;
    keywords: string[];
    longAnswer: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    createdById: string;
    updatedById: string;
    createdBy: User | null;
    updatedBy: User | null;
    questionSpecializations: SpecializationListItem[];
    questionSkills: SkillListItem[];
    questionTopics: QuestionTopic[];
}