import styles from './NotFoundPage.module.css'
import {Button} from "@/shared/ui/button";
import {useNavigate} from "react-router-dom";

export function NotFoundPage() {

    const navigate = useNavigate()

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Страница не найдена</h1>
            <Button onClick={() => navigate('/', {replace: true})}>Вернуться на главную</Button>
        </div>
    )
}