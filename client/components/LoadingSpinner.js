import styles from '../styles/LoadingSpinner.module.scss';

export default function LoadingSpinner() {

    return (

        <div className={styles['container']}>

            <div className={styles['loading-spinner']}></div>
            
        </div>

    )

}