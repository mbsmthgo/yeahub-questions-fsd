import styles from './QuestionFiltersPanelSkeleton.module.css'

const SECTIONS_CHIPS_COUNT = [10, 10, 4, 5]

export function QuestionFiltersPanelSkeleton() {
    return (
        <div className={styles.skeleton} role='status' aria-label='Загрузка панели фильтров'>
            <div className={styles.input} />
            {SECTIONS_CHIPS_COUNT.map((chipsCount, sectionIndex) => (
                <div key={sectionIndex} className={styles.section}>
                    <div className={styles.title}/>
                    <div className={styles.container}>
                        {Array.from({length: chipsCount}).map((_, chipIndex) => <div key={chipIndex} className={styles.chip}/>)}
                    </div>
                </div>
            ))}
        </div>
    )
}