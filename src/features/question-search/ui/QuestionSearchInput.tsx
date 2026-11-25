import styles from './QuestionSearchInput.module.css';
import searchIcon from "@/shared/assets/icons/search.svg";
import {useEffect, useRef, useState} from "react";
import {useDebounce} from "@/shared/lib/react";
import {useQuestionFilters} from "@/features/question-filters";
import {useSearchParams} from "react-router-dom";

export function QuestionSearchInput() {

    const {filters} = useQuestionFilters()
    const [, setSearchParams] = useSearchParams()

    const [searchValue, setSearchValue] = useState<string>(filters.titleOrDescription)
    const debouncedSearch = useDebounce(searchValue)

    const lastCommittedRef = useRef<string>(filters.titleOrDescription)

    useEffect(() => {
        if (debouncedSearch === lastCommittedRef.current) return

        lastCommittedRef.current = debouncedSearch

        setSearchParams(prevParams => {
            const newParams = new URLSearchParams(prevParams)
            if (debouncedSearch) {
                newParams.set('search', debouncedSearch)
            } else {
                newParams.delete('search')
            }
            newParams.delete('page')
            return newParams
        }, {replace: true})
    }, [debouncedSearch, setSearchParams])

    useEffect(() => {
        if (filters.titleOrDescription === lastCommittedRef.current) return

        lastCommittedRef.current = filters.titleOrDescription

        setSearchValue(filters.titleOrDescription)
    }, [filters.titleOrDescription]);


    return (
        <div className={styles.searchBar}>
            <img className={styles.searchIcon} src={searchIcon} alt='Поиск'/>
            <input value={searchValue}
                   onChange={(e) => setSearchValue(e.target.value)}
                   className={styles.input} type='text' placeholder='Введите запрос...'/>
        </div>
    )
}
