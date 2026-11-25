import {useSearchParams} from "react-router-dom";
import {useCallback, useMemo} from "react";
import type {QuestionFilters} from './types';
import {isValidComplexity} from './validateComplexity';

const parseValidId = (value: string | null): string => {
    if (!value) return ''
    const num = Number(value)
    return Number.isInteger(num) && num > 0 ? String(num) : ''
}

const parseValidNumericList = (value: string | null): string[] => {
    if (!value) return []
    return value
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '' && Number.isFinite(Number(item)) && Number(item) > 0)
}

const parseQuestionFilters = (searchParams: URLSearchParams): QuestionFilters => {
    return {
        specializationId: parseValidId(searchParams.get('specializationId')),
        skills: parseValidNumericList(searchParams.get('skills')),
        complexity: searchParams.get('complexity')?.split(',').filter(isValidComplexity) ?? [],
        rate: parseValidNumericList(searchParams.get('rate')),
        titleOrDescription: searchParams.get('search') ?? ''
    }
}

export const useQuestionFilters = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const filters = useMemo(() => parseQuestionFilters(searchParams), [searchParams])

    const setFilter = useCallback((key: 'specializationId', value: string) => {

        setSearchParams(prevParams => {
            const newParams = new URLSearchParams(prevParams)
            newParams.get(key) === value ? newParams.delete(key) : newParams.set(key, value)
            newParams.delete('page')
            return newParams
        })
    }, [setSearchParams])

    const toggleFilter = useCallback((key: 'skills' | 'complexity' | 'rate', value: string) => {

        setSearchParams(prevParams => {
            const newParams = new URLSearchParams(prevParams)
            const current = newParams.get(key)?.split(',').filter(Boolean) ?? []
            const updated = current.includes(value) ? current.filter(item => item !== value) : [...current, value]
            updated.length > 0 ? newParams.set(key, updated.join(',')) : newParams.delete(key)
            newParams.delete('page')
            return newParams
        })
    }, [setSearchParams])

    return {filters, setFilter, toggleFilter}

}