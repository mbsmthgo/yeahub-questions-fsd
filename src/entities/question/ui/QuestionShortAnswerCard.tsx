import styles from './QuestionShortAnswerCard.module.css'

interface QuestionShortAnswerCardProps {
    shortAnswer: string;
}

export function QuestionShortAnswerCard({shortAnswer}: QuestionShortAnswerCardProps) {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>Краткий ответ</h3>
            <div className={styles.description}
                 dangerouslySetInnerHTML={{__html: `${shortAnswer}`}}/>
        </div>
    )
}