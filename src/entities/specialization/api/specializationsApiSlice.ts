import type {SpecializationListItem, SpecializationsQueryArgs} from '../model/types'
import {baseApi, type PaginatedResponse} from "@/shared/api";

export const specializationsApiSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSpecializations: builder.query<PaginatedResponse<SpecializationListItem>, SpecializationsQueryArgs>({
            query: (args) => ({
                url: 'specializations',
                params: args
            }),
            providesTags: ['Specialization']
        })
    })
})

export const {useGetSpecializationsQuery} = specializationsApiSlice;