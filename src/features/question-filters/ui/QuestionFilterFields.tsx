import {FilterGroup} from "@/shared/ui/filter-group";
import {COMPLEXITY_LEVELS, RATE} from '../model/constants';
import styles from './QuestionFilterFields.module.css';
import {SpecializationFilter} from './SpecializationFilter';
import {SkillsFilter} from './SkillsFilter';
import {useQuestionFilters} from '../model/useQuestionFilters'

export function QuestionFilterFields() {

    const {filters, setFilter, toggleFilter} = useQuestionFilters()

    return (
        <div className={styles.container}>
            <SpecializationFilter onToggle={(value) => setFilter('specializationId', value)}
            selectedValues={filters.specializationId ? [filters.specializationId] : []}/>
            <SkillsFilter onToggle={(value) => toggleFilter('skills', value)}
            selectedValues={filters.skills}/>
            <FilterGroup title='Уровень сложности' items={COMPLEXITY_LEVELS}
                         selectedValues={filters.complexity} onToggle={(value) => toggleFilter('complexity', value)}/>
            <FilterGroup title='Рейтинг' items={RATE}
                         selectedValues={filters.rate} onToggle={(value) => toggleFilter('rate', value)}/>
        </div>
    )
}
