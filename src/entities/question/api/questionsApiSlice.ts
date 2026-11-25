import type {QuestionFull, QuestionListItem, QuestionsQueryArgs} from '../model/types';
import {baseApi, type PaginatedResponse} from "@/shared/api";

export const questionsApiSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getQuestions: builder.query<PaginatedResponse<QuestionListItem>, QuestionsQueryArgs>({
            query: (args) => ({
                url: 'questions/public-questions',
                params: args
            }),
            providesTags: ['Question']
        }),
        getQuestionById: builder.query<QuestionFull, number>({
            query: (questionId) => ({
                url: `questions/public-questions/${questionId}`
            })
        })
    })
})

export const {useGetQuestionsQuery, useGetQuestionByIdQuery} = questionsApiSlice;