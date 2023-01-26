import { useState} from 'react';

import { useRouter } from 'next/router';

import Link from 'next/link';

import Sidebar from './Sidebar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Header.module.scss';

const Header = () => {

    const [toggleMobileNav, setMobileToggleNav] = useState(false);

    const navToggleClass = toggleMobileNav ? styles['nav-show'] : styles['nav-hide'];

    const router = useRouter();

  return (

    <header className={styles['header']}>

        <nav className={'flex' + " " + styles['nav']}>

            <span >
                <Link  href='/'><img className={styles.logo} src='/eon.png' /> </Link>
            </span>

            <menu className={'flex' + " " + styles['header-menu'] + " " + navToggleClass}>

                <li>
                    <Link href='/categories/bike-accessories' className={styles['header-link'] + " " + (router.pathname === '/shop' ? styles['active'] : '')}>Accessories</Link>
                </li>

                <li>
                    <Link href='/categories/apparel' className={styles['header-link'] + " " + (router.pathname === '/shop' ? styles['active'] : '')}>Apparel</Link>
                </li>

                <li>
                    <Link href='/categories/lifestyle' className={styles['header-link'] + " " + (router.pathname === '/shop' ? styles['active'] : '')}>Lifestyle</Link>
                </li>

            </menu>

            <div className={'flex' + " " + styles['icon-container']}>
                
                <Sidebar />
                
                <button onClick={ () => setMobileToggleNav(!toggleMobileNav)} className={styles['mobile-toggle'] + " " + styles['header-icon']}><FontAwesomeIcon icon={toggleMobileNav ? faSquareXmark : faBars} /></button>

            </div>


        </nav>

    </header>

  )
  
}

export default Header;
