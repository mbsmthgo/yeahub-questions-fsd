import styles from './QuestionsListSkeleton.module.css'

export function QuestionsListSkeleton() {
    return (
        <div className={styles.skeleton} role='status' aria-label='Загрузка списка вопросов'>
            <span className={styles.title}/>
            <div className={styles.container}>
                {Array.from({length: 10}).map((_, index) => (
                    <div key={index} className={styles.question} aria-hidden='true'/>
                ))}
            </div>
        </div>
    )
}