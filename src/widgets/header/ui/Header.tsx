import styles from './Header.module.css';
import {Link, NavLink} from "react-router-dom";
import yeahubIcon from '@/shared/assets/icons/logo.svg';
import {ROUTES} from "@/shared/config/routes";
import {useMediaQuery} from "@/shared/lib/react";

export function Header() {

    const isMobile = useMediaQuery('(max-width: 575px)')

    return (
        <header className={styles.header}>
            <Link to={ROUTES.home} className={styles.header_logoGroup}>
                <img src={yeahubIcon} alt='' className={styles.logoGroup_logo}/>
                {!isMobile && (
                <h2 className={styles.logoGroup_title}>Yeahub</h2>
                )}
            </Link>
                <nav className={styles.header_nav}>
                    <NavLink className={({isActive}) => isActive ? styles.nav_activeTab : ''}
                             to={ROUTES.questions} end>База вопросов</NavLink>
                </nav>
            {/*)}*/}
        </header>
    )
}