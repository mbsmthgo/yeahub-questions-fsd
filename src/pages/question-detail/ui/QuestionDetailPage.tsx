import styles from './QuestionDetailPage.module.css'
import {
    QuestionHeaderCard,
    QuestionLongAnswerCard,
    QuestionMetaSidebar,
    QuestionShortAnswerCard
} from "@/entities/question";
import {GuruCard} from "@/shared/ui/guru";
import {useGetQuestionByIdQuery} from "@/entities/question/api/questionsApiSlice";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import DOMPurify from "dompurify";
import {useMediaQuery} from "@/shared/lib/react";
import {Button} from '@/shared/ui/button';
import arrowBack from '@/shared/assets/icons/arrow-down.svg';
import {QuestionDetailPageSkeleton} from "@/pages/question-detail/ui/QuestionDetailPageSkeleton";
import {parsePositiveInt} from "@/shared/lib/utils";
import {skipToken} from "@reduxjs/toolkit/query";
import {ROUTES} from "@/shared/config/routes";

export function QuestionDetailPage() {

    const {questionId} = useParams()
    const validId = parsePositiveInt(questionId ?? null)
    const {data: questionData, isLoading, isError} = useGetQuestionByIdQuery(validId ?? skipToken)

    const [infoOpen, setInfoOpen] = useState<boolean>(false)

    const navigate = useNavigate()
    const location = useLocation()
    const backUrl = location.state?.from || '/questions'

    const isTablet = useMediaQuery('(max-width: 1024px)')

    if (validId === null) {
        return <Navigate to={ROUTES.notFound} replace />
    }

    if (isLoading) {
        return (
            <QuestionDetailPageSkeleton/>
        )
    }

    if (isError) {
        return (
            <main className={styles.page}>
                <p>Ошибка при загрузке вопроса.</p>
            </main>
        )
    }

    if (!questionData) {
        return (
            <main className={styles.page}>
                <p>Вопрос не найден.</p>
            </main>
        )
    }

    const cleanShortAnswer = DOMPurify.sanitize(questionData.shortAnswer ?? '')
    const cleanLongAnswer = DOMPurify.sanitize(questionData.longAnswer ?? '')

    return (
        <main className={styles.page}>
            <Button variant='tertiary'
                    onClick={() => navigate(backUrl)}>
                <img src={arrowBack} alt=''
                     style={{transform: 'rotate(90deg)'}}/>
                Назад
            </Button>
            <div className={styles.container}>
                <div className={styles.leftCol}>
                    <QuestionHeaderCard title={questionData.title} description={questionData.description}
                                        setInfoOpen={setInfoOpen}/>
                    <QuestionShortAnswerCard shortAnswer={cleanShortAnswer}/>
                    <QuestionLongAnswerCard longAnswer={cleanLongAnswer}/>
                    {isTablet && <GuruCard/>}
                </div>
                <div className={styles.rightCol}>
                    <QuestionMetaSidebar infoOpen={infoOpen} setInfoOpen={setInfoOpen}
                                         complexity={questionData.complexity} rate={questionData.rate}
                                         skills={questionData.questionSkills} keywords={questionData.keywords}
                                         author={questionData.createdBy?.username ?? '-'}/>
                    {!isTablet && <GuruCard/>}
                </div>
            </div>
        </main>
    )
}