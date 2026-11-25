import styles from './QuestionsList.module.css'
import {useCallback, useState} from "react";
import {QuestionCard, useGetQuestionsQuery} from "@/entities/question";
import {useQuestionFilters, validateComplexity} from "@/features/question-filters";
import {Pagination} from "@/shared/ui/pagination";
import {usePageChange} from "@/features/questions-pagination";
import {QuestionsListSkeleton} from "@/widgets/questions-list/ui/QuestionsListSkeleton.tsx";
import filtersIcon from '@/shared/assets/icons/filters.svg'

const QUESTIONS_PER_PAGE = 10
const SKILL_FILTER_MODE = 'ANY'

interface QuestionsListProps {
    setFiltersOpen: (value: boolean) => void;
}

export function QuestionsList({setFiltersOpen}: QuestionsListProps) {

    const {filters} = useQuestionFilters()

    const {currentPage, handlePageChange} = usePageChange()

    const {data: questionsData, isLoading, error} = useGetQuestionsQuery(
        {
            page: currentPage,
            limit: QUESTIONS_PER_PAGE,
            specializationId: filters.specializationId ? Number(filters.specializationId) : undefined,
            skills: filters.skills.length ? filters.skills : undefined,
            complexity: validateComplexity(filters.complexity),
            rate: filters.rate.length ? filters.rate.map(Number) : undefined,
            titleOrDescription: filters.titleOrDescription.trim() || undefined,
            skillFilterMode: SKILL_FILTER_MODE
        })

    const [isOpen, setIsOpen] = useState<number[]>([])

    const handleQuestionToggle = useCallback((questionId: number) => {
        setIsOpen(prev => {
            return prev.includes(questionId) ? prev.filter(question => question !== questionId)
                : [...prev, questionId]
        })
    }, [])

    const totalPages = Math.max(Math.ceil((questionsData?.total ?? 0) / QUESTIONS_PER_PAGE), 1)

    if (isLoading) {
        return (
            <QuestionsListSkeleton/>
        )
    }

    if (error) {
        return (
            <div className={styles.card}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Список вопросов</h1>
                    <button type='button' className={styles.filtersBtn}
                            onClick={() => setFiltersOpen(true)}>
                        <img src={filtersIcon} alt='Открыть панель фильтров'/>
                    </button>
                </div>
                <p>Ошибка при загрузке вопросов.</p>
                <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages}/>
            </div>
        )
    }

    if (!questionsData || questionsData.data.length === 0) {
        return (
            <div className={styles.card}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Список вопросов</h1>
                    <button type='button' className={styles.filtersBtn}
                            onClick={() => setFiltersOpen(true)}>
                        <img src={filtersIcon} alt='Открыть панель фильтров'/>
                    </button>
                </div>
                <p>Вопросы не найдены.</p>
                <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages}/>
            </div>
        )
    }

    return (
        <div className={styles.card}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Список вопросов</h1>
                <button type='button' className={styles.filtersBtn}
                        onClick={() => setFiltersOpen(true)}>
                    <img src={filtersIcon} alt='Открыть панель фильтров'/>
                </button>
            </div>
            <ul className={styles.list}>
                {questionsData.data.map(question => (
                    <li key={question.id}>
                        <QuestionCard question={question} isOpen={isOpen.includes(question.id)}
                                      onToggle={handleQuestionToggle}/>
                    </li>
                ))}
            </ul>
            <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages}/>
        </div>
    )
}