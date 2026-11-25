import styles from './FilterBadge.module.css'
import type {ReactNode} from "react";

interface FilterBadgeProps {
    children: ReactNode;
}

export function FilterBadge({children}: FilterBadgeProps) {
    return (
        <span className={styles.badge}>
            {children}
        </span>
    )
}