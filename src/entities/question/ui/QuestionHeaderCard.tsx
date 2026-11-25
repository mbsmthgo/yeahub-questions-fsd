import styles from './QuestionHeaderCard.module.css';
import figmaImage from '@/shared/assets/images/figma-backup.png';
import questionInfoIcon from '@/shared/assets/icons/question-info.svg'
import {useMediaQuery} from "@/shared/lib/react";

interface QuestionHeaderCardProps {
    title: string;
    description: string;
    setInfoOpen: (value: (prev: boolean) => boolean) => void
}

export function QuestionHeaderCard({title, description, setInfoOpen}: QuestionHeaderCardProps) {

    const isMobile = useMediaQuery('(max-width: 575px)')

    return (
        <div className={styles.card}>
            <img className={styles.questionImage} src={figmaImage} alt=''/>
            <div className={styles.questionAboutContainer}>
                <div className={styles.titleBtnContainer}>
                    <h2 className={styles.title}>{title}</h2>
                    {isMobile && (<button onClick={() => setInfoOpen(prev => !prev)}
                                          className={styles.questionMetaBtn}>
                        <img src={questionInfoIcon} alt='Посмотреть теги вопроса'/>
                    </button>)}
                </div>
                <p className={styles.description}>{description}</p>
            </div>
            {!isMobile && (<button onClick={() => setInfoOpen(prev => !prev)}
                                   className={styles.questionMetaBtn}>
                <img src={questionInfoIcon} alt='Посмотреть теги вопроса'/>
            </button>)}
        </div>
    )
}