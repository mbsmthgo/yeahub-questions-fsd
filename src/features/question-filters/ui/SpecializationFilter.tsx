import {FilterGroup} from "@/shared/ui/filter-group";
import {useGetSpecializationsQuery} from "@/entities/specialization";
import {Button} from "@/shared/ui/button";
import {useState} from "react";
import styles from './SpecializationFilter.module.css';

interface SpecializationFilterProps {
    onToggle: (value: string) => void;
    selectedValues: string[];
}

export function SpecializationFilter({onToggle, selectedValues}: SpecializationFilterProps) {

    const [showAll, setShowAll] = useState<boolean>(false)

    const {data: specializationsData, isLoading, isError} = useGetSpecializationsQuery({page: 1, limit: 100})

    const items = (specializationsData?.data ?? []).map(spec => ({
        value: String(spec.id),
        label: spec.title
    }))

    const visibleSpecializations = showAll ? items : items.slice(0, 10)

    return (
        <div className={styles.container}>
            <FilterGroup title='Специализация' items={visibleSpecializations} loading={isLoading} error={isError}
                         onToggle={onToggle} selectedValues={selectedValues}/>
            <Button variant='tertiary' onClick={() => setShowAll(prev => !prev)}>
                {showAll ? 'Скрыть' : 'Посмотреть все'}
            </Button>
        </div>
    )
}