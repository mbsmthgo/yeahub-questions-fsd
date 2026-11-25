import styles from './QuestionDetailPageSkeleton.module.css'

export function QuestionDetailPageSkeleton() {
    return (
        <div className={styles.skeletonPage} role='status' aria-label='Загрузка страницы вопроса'>
            <div className={`${styles.navBtn} ${styles.skeletonDark}`}/>
            <div className={styles.container}>
                <div className={styles.leftCol}>
                    <div className={styles.header}>
                        <div className={`${styles.headerImage} ${styles.skeletonLight}`}/>
                        <div className={styles.headerInfo}>
                            <div className={`${styles.headerTitle} ${styles.skeletonDark}`}/>
                            <div className={`${styles.headerDescription} ${styles.skeletonLight}`}/>
                        </div>
                    </div>
                    <div className={styles.shortAnswer}>
                        <div className={`${styles.answerTitle} ${styles.skeletonLight}`}/>
                        <div className={`${styles.answerBody} ${styles.skeletonLight}`}/>
                    </div>
                    <div className={styles.longAnswer}>
                        <div className={`${styles.answerTitle} ${styles.skeletonLight}`}/>
                        <div className={`${styles.answerBody} ${styles.skeletonLight}`}/>
                    </div>
                </div>
                <div className={styles.rightCol}>
                    <div className={styles.metaSidebar}>
                        {Array.from({length: 3}).map((_, index) => (
                            <div key={index} className={styles.metaBlock}>
                                <div className={`${styles.metaTitle} ${styles.skeletonDark}`}/>
                                <div className={`${styles.metaValue} ${styles.skeletonLight}`}/>
                            </div>
                        ))}
                        <div className={`${styles.metaTitle} ${styles.skeletonDark}`}/>
                    </div>
                    <div className={styles.guruCard}>
                        <div className={styles.guruContainer}>
                            <div className={`${styles.guruPhoto} ${styles.skeletonLight}`}/>
                            <div className={styles.guruInfo}>
                                <div className={`${styles.metaTitle} ${styles.skeletonDark}`}/>
                                <div className={`${styles.guruValue} ${styles.skeletonLight}`}/>
                            </div>
                        </div>
                        <div className={`${styles.guruDescription} ${styles.skeletonLight}`}/>
                        <div className={`${styles.metaValue} ${styles.skeletonLight}`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
