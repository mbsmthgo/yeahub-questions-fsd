import styles from './TagBadge.module.css'

interface BadgeProps {
    name: string;
    value: number;
}

export function TagBadge({name, value}: BadgeProps) {
    return (
        <span className={styles.badge}>
            {name}: <span className={styles.badgeIcon}>{value}</span>
        </span>
    )
}