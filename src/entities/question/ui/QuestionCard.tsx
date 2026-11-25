import styles from './QuestionCard.module.css';
import arrowDownIcon from '@/shared/assets/icons/arrow-down.svg';
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import popoverIcon from "@/shared/assets/icons/popover.svg";
import {ROUTES} from "@/shared/config/routes";
import DOMPurify from 'dompurify';
import arrowRightIcon from '@/shared/assets/icons/arrow-left.svg';
import type {QuestionListItem} from '../model/types';
import {TagBadge} from "@/shared/ui/tag-badge";



interface QuestionCardProps {
    question: QuestionListItem;
    isOpen: boolean;
    onToggle: (questionId: number) => void;
}

export function QuestionCard({question, isOpen, onToggle}: QuestionCardProps) {

    const [showPopover, setShowPopover] = useState<boolean>(false)

    const location = useLocation()

    const cleanShortAnswer = DOMPurify.sanitize(question.shortAnswer ?? '')

    return (
        <div className={styles.card}>
            <button type='button' aria-expanded={isOpen} className={styles.container}
            onClick={() => onToggle(question.id)}>
                <span className={styles.question}>{question.title}</span>
                <span className={styles.questionBtn}>
                    <img src={arrowDownIcon} alt='Показать ответ'
                    style={{transform: `${isOpen ? 'rotate(180deg)' : ''}`}}/>
                </span>
            </button>
            {isOpen && (
                <div className={styles.questionBody}>
                    <div className={styles.badgesBtn_container}>
                        <div className={styles.badges}>
                            <TagBadge name='Рейтинг' value={question.rate} />
                            <TagBadge name='Сложность' value={question.complexity} />
                        </div>
                        <div className={styles.moreBtn_container}>
                            <button type='button' className={styles.moreBtn}
                                    onClick={() => setShowPopover(prev => !prev)}>
                                <img src={popoverIcon} alt='Подробнее'/>
                            </button>
                            {showPopover && (
                                <div className={styles.popover}>
                                    <Link to={ROUTES.questionDetail(question.id)} state={{from: `${location.pathname}${location.search}`}}
                                          className={styles.popover_moreBtn}>Подробнее</Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.answer}
                         dangerouslySetInnerHTML={{__html: cleanShortAnswer}}/>
                    <Link to={ROUTES.questionDetail(question.id)} state={{from: `${location.pathname}${location.search}`}}
                          className={styles.moreBtn_mobile}>
                        Подробнее
                        <img style={{transform: 'rotate(180deg)'}}
                             src={arrowRightIcon} alt='Подробнее'/>
                    </Link>
                </div>
            )}
        </div>
    )
}