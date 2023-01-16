import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import styles from '../styles/Footer.module.scss';

const Footer = () => {

    return (
        
        <footer className={styles.footer}>

            <p>Eon <FontAwesomeIcon icon={faCopyright} /> 2023</p>

        </footer>

    )

}

export default Footer;