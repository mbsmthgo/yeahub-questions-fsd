import styles from './QuestionsPage.module.css'
import {QuestionsList} from "@/widgets/questions-list";
import {QuestionFiltersPanel} from "@/widgets/question-filters";
import {useState} from "react";

export function QuestionsPage() {

    const [filtersOpen, setFiltersOpen] = useState<boolean>(false)

    return (
        <main className={styles.page}>
            <QuestionsList setFiltersOpen={setFiltersOpen}/>
            <QuestionFiltersPanel filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen}/>
        </main>
    )
}