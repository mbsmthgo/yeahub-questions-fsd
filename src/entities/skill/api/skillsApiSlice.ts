import type {SkillListItem, SkillsQueryArgs} from '../model/types'
import {baseApi, type PaginatedResponse} from "@/shared/api";

export const skillsApiSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSkills: builder.query<PaginatedResponse<SkillListItem>, SkillsQueryArgs>({
            query: (args) => ({
                url: 'skills',
                params: args
            }),
            providesTags: ['Skill']
        })
    })
})

export const {useGetSkillsQuery} = skillsApiSlice;