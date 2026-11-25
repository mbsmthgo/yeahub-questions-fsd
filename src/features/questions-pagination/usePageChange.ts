import {useSearchParams} from "react-router-dom";
import {useCallback, useEffect} from "react";
import {parsePositiveInt} from "@/shared/lib/utils";

export const usePageChange = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const rawPage = searchParams.get('page')
    const currentPage = parsePositiveInt(rawPage) ?? 1

    useEffect(() => {
        if (rawPage === null || parsePositiveInt(rawPage) !== null) return

        setSearchParams(prevParams => {
            const newParams = new URLSearchParams(prevParams)
            newParams.delete('page')
            return newParams
        }, {replace: true})
    }, [rawPage, setSearchParams])

    const handlePageChange = useCallback((page: number) => {
        if (!Number.isSafeInteger(page) || page < 1) return

        setSearchParams(prevParams => {
            const newParams = new URLSearchParams(prevParams)
            newParams.set('page', String(page))
            return newParams
        }, {replace: true})
    }, [setSearchParams])

    return {currentPage, handlePageChange}

}
