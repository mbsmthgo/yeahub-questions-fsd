import styles from './Pagination.module.css';
import {DOTS, generatePagesRange} from './generatePagesRange';
import {useMemo} from "react";
import arrowLeftRightIcon from '@/shared/assets/icons/arrow-left.svg'

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function Pagination({currentPage, totalPages, onPageChange}: PaginationProps) {
    const pages = useMemo(() => {
        return generatePagesRange(totalPages, currentPage)
    }, [totalPages, currentPage])

    if (totalPages <= 1) return null

    return (
        <div className={styles.pagination}>
            <button className={styles.pageArrow}
                    onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1}>
                <img src={arrowLeftRightIcon} alt='Предыдущая'/>
            </button>
            {pages.map(((page, index) => {
                if (page === DOTS) return <span key={`dots-${index}`}>...</span>
                return (
                    <button key={page} className={`${styles.pageNumber} ${page === currentPage ? styles.pageNumber_active : ''}`}
                            onClick={() => onPageChange(page)} disabled={page === currentPage}>
                        {page}
                    </button>
                )
            }))}
            <button className={styles.pageArrow}
                    onClick={() => onPageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
                <img style={{transform: 'rotate(180deg)'}}
                     src={arrowLeftRightIcon} alt='Следующая'/>
            </button>
        </div>
    )
}