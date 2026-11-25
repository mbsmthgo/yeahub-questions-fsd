import styles from './QuestionFiltersPanel.module.css';
import {QuestionSearchInput} from "@/features/question-search";
import {QuestionFilterFields} from "@/features/question-filters";
import closeIcon from '@/shared/assets/icons/close.svg';

interface QuestionFiltersPanelProps {
    filtersOpen: boolean;
    setFiltersOpen: (value: boolean) => void;
}

export function QuestionFiltersPanel({filtersOpen, setFiltersOpen}: QuestionFiltersPanelProps) {

    return (
        <aside className={`${styles.sidebar} ${filtersOpen ? styles.sidebar_open : ''}`}>
            {filtersOpen && <button className={styles.closeBtn} onClick={() => setFiltersOpen(false)}>
                <img src={closeIcon} alt='Скрыть панель фильтров'/>
            </button>}
            <QuestionSearchInput />
            <QuestionFilterFields />
        </aside>
    )
}