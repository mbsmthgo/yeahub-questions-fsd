import {QuestionsListSkeleton} from "@/widgets/questions-list";
import {QuestionFiltersPanelSkeleton} from "@/widgets/question-filters";
import styles from './QuestionPageSkeleton.module.css'

export function QuestionPageSkeleton() {
    return (
        <div className={styles.pageSkeleton}>
            <QuestionsListSkeleton />
            <QuestionFiltersPanelSkeleton />
        </div>
    )
}