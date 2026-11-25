import styles from './QuestionMetaSidebar.module.css';
import type {SkillListItem} from "@/entities/skill";
import closeIcon from '@/shared/assets/icons/close.svg';
import figmaMiniIcon from '@/shared/assets/icons/figma-backup-miniIcon.svg';
import {FilterBadge} from "@/shared/ui/filter-badge";
import {TagBadge} from "@/shared/ui/tag-badge"

interface QuestionMetaSidebarProps {
    infoOpen: boolean;
    setInfoOpen: (value: boolean) => void;
    complexity: number;
    rate: number;
    skills: SkillListItem[];
    keywords: string[];
    author: string;
}

export function QuestionMetaSidebar({infoOpen, setInfoOpen, complexity, rate, skills, keywords, author}: QuestionMetaSidebarProps) {
    return (
        <div className={`${styles.sidebar} ${infoOpen ? styles.sidebar_open : ''}`}>
            <div className={styles.questionTagsContainer}>
                {infoOpen && <button type='button' className={styles.closeBtn}
                                     onClick={() => setInfoOpen(false)}>
                    <img src={closeIcon} alt='Скрыть теги вопроса'/>
                </button>}
                <p className={styles.title}>Уровень:</p>
                <div className={styles.badges}>
                    <TagBadge name='Сложность' value={complexity}/>
                    <TagBadge name='Рейтинг' value={rate}/>
                </div>
            </div>
            <div className={styles.questionTagsContainer}>
                <p className={styles.title}>Навыки:</p>
                <div className={styles.filterBadges}>
                    {skills?.map(skill => (
                        <FilterBadge key={skill.id}>
                            <img src={figmaMiniIcon} alt=''/>
                            {skill.title}
                        </FilterBadge>
                    ))}
                </div>
            </div>
            <div className={styles.questionTagsContainer}>
                <p className={styles.title}>Ключевые слова:</p>
                <div className={styles.filterBadges}>
                    {keywords?.map(keyword => (
                        <span key={keyword}
                              className={styles.tag}>#{keyword}</span>
                    ))}
                </div>
            </div>
            <p className={styles.authorString}>
                Автор: <span className={styles.author}>{author}</span>
            </p>
        </div>
    )
}