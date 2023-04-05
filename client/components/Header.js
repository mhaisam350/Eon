import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import Link from 'next/link';

import Sidebar from './Sidebar';

import { useCartContext } from '../contexts/CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Header.module.scss';

const Header = () => {

    const router = useRouter();

    const darkThemePages = ['/', '/scrambler']

    const [headerTheme, setHeaderTheme] = useState( darkThemePages.includes(router.pathname) ? 'Dark' : 'Light' )
    const [toggleMobileNav, setMobileToggleNav] = useState(false);
    const [headerPosition, setHeaderPosition] = useState('translateY(0)');
    const [initialScrollPosition, setInitialScrollPosition] = useState(0);

    const { cartToggled } = useCartContext();

    const navToggleClass = toggleMobileNav ? styles['nav-show'] : styles['nav-hide'];

    const headerBoxShadow = '0 2.8px 2.2px rgba(139, 139, 139, 0.034), 0 6.7px 5.3px rgba(139, 139, 139, 0.048), 0 12.5px 10px rgba(139, 139, 139, 0.06)'

    const changeTransform = () => {

        if (window.scrollY > 100) {

            setHeaderTheme('Light');

        } else {

            setHeaderTheme( darkThemePages.includes(router.pathname) ? 'Dark' : 'Light');

        };

        if (toggleMobileNav) return;

        let currentPosition = window.scrollY;

        if (Math.sign(currentPosition - initialScrollPosition) === 1) {

            setHeaderPosition('translateY(-100%)');

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

    useEffect(() => {

        if (cartToggled) setHeaderPosition('translateY(0)');

    }, [cartToggled])

  return (

    <header className={styles['header']} style={ { transform: headerPosition, background: headerTheme !== 'Dark' ? '#fff' : 'transparent', color: headerTheme !== 'Dark' ? '#000' : '#fff', boxShadow: headerTheme !== 'Dark' ? headerBoxShadow : 'none' }}>

        <nav className={'flex' + " " + styles['nav']}>

            <span >
                <Link  href='/'><img className={styles.logo} src={'/static/images/EMotors.png'} alt='Logo picture of bike' /> </Link>
            </span>

            <menu className={'flex' + " " + styles['header-menu'] + " " + navToggleClass}>

                <li className={styles['menu-item']}>
                    <Link href='/scrambler' className={styles['scrambler-link']}>Scrambler</Link>
                </li>

                <li className={styles['menu-item']}>
                    <Link href='/categories/bike-accessories' onClick={() => setMobileToggleNav(false)} className={styles['header-link']} style={{"--bg": headerTheme !== 'Dark' ? '#000' : '#fff'}}>Accessories</Link>
                </li>

                <li className={styles['menu-item']}>
                    <Link href='/categories/apparel' onClick={() => setMobileToggleNav(false)} className={styles['header-link']} style={{"--bg": headerTheme !== 'Dark' ? '#000' : '#fff'}}>Apparel</Link>
                </li>

                <li className={styles['menu-item']}>
                    <Link href='/categories/lifestyle' onClick={() => setMobileToggleNav(false)} className={styles['header-link']} style={{"--bg": headerTheme !== 'Dark' ? '#000' : '#fff'}}>Lifestyle</Link>
                </li>

            </menu>

            <div className={'flex' + " " + styles['icon-container']}>
                
                <Sidebar theme={headerTheme} />
                
                <button onClick={() => setMobileToggleNav(!toggleMobileNav)} className={styles['mobile-toggle']} style={{color: (headerTheme !== 'Dark') || (toggleMobileNav) ? '#000' : '#fff'}}><FontAwesomeIcon icon={toggleMobileNav ? faSquareXmark : faBars} /></button>

            </div>


        </nav>

    </header>

  )
  
}

export default Header;
