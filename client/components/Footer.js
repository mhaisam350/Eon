import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'; 


import styles from '../styles/Footer.module.scss';

const Footer = () => {

    return (
        
        <footer className={'flex' + " " + styles['footer']}>

            <Link href='/'><img className={styles['footer-logo']} src='/emotors.png' /></Link>

            <ul className={'flex' + " " + styles['footer-links']}>

                <li className={styles['link-li']}>Terms of Use</li>

                <li className={styles['link-li']}>Cookie Policy</li>
                
                <li className={styles['link-li']}>Privacy Policy</li>

            </ul>

            <p className={styles['copyright-text']}>Copyright <FontAwesomeIcon className={styles['copyright-icon']} icon={faCopyright} /> 2023</p>

            <ul className={'flex' + " " + styles['footer-icons']}>

                <li className={styles['icon-li']}><FontAwesomeIcon className={styles.icon} icon={faFacebookF} /></li>

                <li className={styles['icon-li']}><FontAwesomeIcon className={styles.icon} icon={faInstagram} /></li>

                <li className={styles['icon-li']}><FontAwesomeIcon className={styles.icon} icon={faTwitter} /></li>

                <li className={styles['icon-li']}><FontAwesomeIcon className={styles.icon} icon={faYoutube} /></li>

            </ul>

        </footer>

    )

}

export default Footer;