import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSquareXmark, faCaretDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Header.module.scss';

const Header = () => {

    const [toggleMobileNav, setMobileToggleNav] = useState(false);
    // const [toggleDropdown, setToggleDropdown] = useState(false);
    const [background, setBackground] = useState(false);

    const navToggleClass = toggleMobileNav ? styles['nav-show'] : styles['nav-hide'];
    // const dropdownToggleClass = toggleDropdown ? styles['dropdown-show'] : styles['dropdown-hide'];
    const backgroundClass = background ? styles['header-background'] : styles['header-transparent'];

    const router = useRouter();

    const changeBackground = () => {

        if (window.scrollY >= 5) {
            setBackground(true);
        } else {
            setBackground(false);
        };
        

    }

    useEffect(() => {

        window.addEventListener("scroll", changeBackground);

    });

  return (

    <header className={styles['header'] + " " + backgroundClass}>

        <nav className={'flex' + " " + styles['nav']}>

            <span className={styles.logo}>
                <Link href='/'>Logo</Link>
            </span>

            <menu className={'flex' + " " + styles['header-menu'] + " " + navToggleClass}>

                {/* <li onClick={ () => setToggleDropdown(!toggleDropdown)} className={styles['dropdown-parent']} >
                    <span className={styles['dropdown-parent-text']}>Products <FontAwesomeIcon icon={faCaretDown} /></span>
                    <menu className={styles['dropdown-menu'] + " " + dropdownToggleClass}>
                        <li className={styles['dropdown-item']}><Link href='/'className={styles['dropdown-link']}>Eon UI</Link></li>
                    </menu>
                </li> */}

                <li>
                    <Link href='/' className={styles['header-link'] + " " + (router.pathname === '/shop' ? styles['active'] : '')}>Accessories</Link>
                </li>

                <li>
                    <Link href='/' className={styles['header-link'] + " " + (router.pathname === '/shop' ? styles['active'] : '')}>Apparel</Link>
                </li>

                <li>
                    <Link href='/' className={styles['header-link'] + " " + (router.pathname === '/shop' ? styles['active'] : '')}>Lifestyle</Link>
                </li>

            </menu>

            <div className={'flex' + " " + styles['icon-container']}>

                <button className={styles['header-icon']}><FontAwesomeIcon icon={faCartShopping} /></button>
                <button onClick={ () => setMobileToggleNav(!toggleMobileNav)} className={styles['mobile-toggle'] + " " + styles['header-icon']}><FontAwesomeIcon icon={toggleMobileNav ? faSquareXmark : faBars} /></button>

            </div>


        </nav>

    </header>

  )
  
}

export default Header;
