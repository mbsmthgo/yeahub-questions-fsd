import styles from './FilterGroup.module.css'
import {Button} from "@/shared/ui/button";

export interface FilterOption {
    value: string;
    label: string;
}

interface FilterGroupProps {
    title: string;
    items: FilterOption[];
    selectedValues: string[];
    onToggle: (value: string) => void;
    loading?: boolean;
    error?: boolean;
    icon?: string;
}

export function FilterGroup({title, items, selectedValues, onToggle, loading, error, icon}: FilterGroupProps) {
    return (
        <div>
            <p className={styles.title}>{title}</p>
            {loading ? <div className={styles.container}>
                    {Array.from({length: 10}).map((_, index) => <div key={index} className={styles.skeleton}/>)}
            </div> : error ? <p>Ошибка при загрузке фильтров.</p> : (
                <div className={styles.container}>
                    {items.map(item => {
                        const isSelected = selectedValues.includes(item.value)
                        return (
                            <Button key={item.value} variant='filter'
                                    onClick={() => onToggle(item.value)}
                                    aria-pressed={isSelected} leftIcon={icon ? <img src={icon} alt=''/> : undefined}>
                               {item.label}
                            </Button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}