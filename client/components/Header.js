import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import Link from 'next/link';

import Sidebar from './Sidebar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Header.module.scss';

const Header = () => {

    const [toggleMobileNav, setMobileToggleNav] = useState(false);
    const [headerPosition, setHeaderPosition] = useState('translateY(0)');
    const [initialScrollPosition, setInitialScrollPosition] = useState(0);

    const navToggleClass = toggleMobileNav ? styles['nav-show'] : styles['nav-hide'];

    const router = useRouter();

    const changeTransform = () => {

        if (toggleMobileNav) return;

        let currentPosition = window.scrollY;

        if (Math.sign(currentPosition - initialScrollPosition) === 1) {

            setHeaderPosition('translateY(-5em)');

            setInitialScrollPosition(window.scrollY);

        } else {

            setHeaderPosition('translateY(0)');

            setInitialScrollPosition(window.scrollY);

        };

    }

    useEffect(() => {

        window.addEventListener('scroll', changeTransform);

        return () => {

            window.removeEventListener('scroll', changeTransform);

        };

    })

  return (

    <header className={styles['header']} style={ { transform: headerPosition } }>

        <nav className={'flex' + " " + styles['nav']}>

            <span >
                <Link  href='/'><img className={styles.logo} src='/eon.png' /> </Link>
            </span>

            <menu className={'flex' + " " + styles['header-menu'] + " " + navToggleClass}>

                <li className={styles['menu-item']} id={styles['border-right']}>
                    <Link href='/' className={styles['header-link']} id={styles['scrambler-link']}>Scrambler</Link>
                </li>

                {/* <li>
                    <hr />
                </li> */}

                <li className={styles['menu-item']}>
                    <Link href='/categories/bike-accessories' className={styles['header-link'] + " " + (router.pathname === '/shop' ? styles['active'] : '')}>Accessories</Link>
                </li>

                <li className={styles['menu-item']}>
                    <Link href='/categories/apparel' className={styles['header-link'] + " " + (router.pathname === '/shop' ? styles['active'] : '')}>Apparel</Link>
                </li>

                <li className={styles['menu-item']}>
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
