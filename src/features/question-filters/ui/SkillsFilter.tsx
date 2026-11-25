import {FilterGroup} from "@/shared/ui/filter-group";
import {useGetSkillsQuery} from "@/entities/skill";
import figmaMiniIcon from '@/shared/assets/icons/figma-backup-miniIcon.svg'
import {useState} from "react";
import {Button} from "@/shared/ui/button";
import styles from './SkillsFilter.module.css';

interface SkillsFilterProps {
    onToggle: (value: string) => void;
    selectedValues: string[];
}

export function SkillsFilter({onToggle, selectedValues}: SkillsFilterProps) {

    const [showAll, setShowAll] = useState<boolean>(false)

    const {data: skillsData, isLoading, isError} = useGetSkillsQuery({page: 1, limit: 100})

    const items = (skillsData?.data ?? []).map(skill => ({
        value: String(skill.id),
        label: skill.title
    }))

    const visibleSkills = showAll ? items : items.slice(0, 10)

    return (
        <div className={styles.container}>
            <FilterGroup title='Навыки' items={visibleSkills} loading={isLoading} error={isError}
                         onToggle={onToggle} selectedValues={selectedValues} icon={figmaMiniIcon}/>
            <Button variant='tertiary' onClick={() => setShowAll(prev => !prev)}>
                {showAll ? 'Скрыть' : 'Посмотреть все'}
            </Button>
        </div>

    )
}