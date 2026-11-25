import styles from './GuruCard.module.css';
import guruPhoto from '@/shared/assets/images/guru.png';
import tgPurpleIcon from '@/shared/assets/icons/tg-purple.svg';
import youtubePurpleIcon from '@/shared/assets/icons/youtube-purple.svg';
import profileMediaIcon from '@/shared/assets/icons/profile-media.svg'

export function GuruCard() {
    return (
        <div className={styles.card}>
            <div className={styles.guruProfile}>
                <img src={guruPhoto} alt='Фото эксперта'/>
                <div>
                    <p>Руслан Куянец</p>
                    <p className={styles.guruSpecialization}>Python Guru</p>
                </div>
            </div>
            <p className={styles.guruDescription}>
                Guru – это эксперты YeaHub, которые помогают развивать комьюнити.
            </p>
            <div className={styles.guruMedia}>
                <img src={tgPurpleIcon} alt='Telegram-канал'/>
                <img src={youtubePurpleIcon} alt='Youtube-канал'/>
                <img src={profileMediaIcon} alt='Профиль'/>
            </div>
        </div>
    )
}