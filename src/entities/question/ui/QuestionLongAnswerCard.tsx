import styles from './QuestionLongAnswerCard.module.css'
import {useState} from "react";
import arrowDownUpIcon from '@/shared/assets/icons/arrow-down.svg'

interface QuestionLongAnswerCardProps {
    longAnswer: string;
}

export function QuestionLongAnswerCard({longAnswer}: QuestionLongAnswerCardProps) {

    const [isFull, setIsFull] = useState<boolean>(false)

    return (
        <div className={styles.card}>
            <h3 className={styles.title}>Развёрнутый ответ</h3>
            <div className={`${styles.description} ${!isFull ? styles.description_clipped : ''}`}
                 dangerouslySetInnerHTML={{__html: `${longAnswer}`}}/>
            <button onClick={() => setIsFull(prev => !prev)}
                    className={styles.detailAnswerBtn}>
                {isFull ? 'Свернуть' : 'Развернуть'}
                <img style={{transform: `${isFull ? 'rotate(180deg)' : ''}`}}
                     src={arrowDownUpIcon} alt='Показать полный ответ'/>
            </button>
        </div>
    )
}