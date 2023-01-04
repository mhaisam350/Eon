import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSquareXmark, faCaretDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Header.module.scss';

const Header = () => {

    const [toggleNav, setToggleNav] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    const navToggleClass = toggleNav ? styles['nav-show'] : styles['nav-hide'];
    const dropdownToggleClass = toggleDropdown ? styles['dropdown-show'] : styles['dropdown-hide'];

    const router = useRouter();

  return (

    <header className={styles.header}>

        <nav className={'flex' + " " + styles['nav']}>

            <span className={styles.logo}>
                <Link href='/'>Logo</Link>
            </span>

            <menu className={'flex' + " " + styles['header-menu'] + " " + navToggleClass}>

                <li onClick={ () => setToggleDropdown(!toggleDropdown)} className={styles['dropdown-parent']} >
                    <span className={styles['dropdown-parent-text']}>Products <FontAwesomeIcon icon={faCaretDown} /></span>
                    <menu className={styles['dropdown-menu'] + " " + dropdownToggleClass}>
                        <li className={styles['dropdown-item']}><Link href='/'className={styles['dropdown-link']}>Eon UI</Link></li>
                    </menu>
                </li>

                <li>
                    <Link href='/'className={styles['header-link'] + " " + (router.pathname === '/shop' ? styles['active'] : '')}>Shop</Link>
                </li>

            </menu>

            <div className={'flex' + " " + styles['icon-container']}>

                <button className={styles['header-icon']}><FontAwesomeIcon icon={faCartShopping} /></button>
                <button onClick={ () => setToggleNav(!toggleNav)} className={styles['mobile-toggle'] + " " + styles['header-icon']}><FontAwesomeIcon icon={toggleNav ? faSquareXmark : faBars} /></button>

            </div>


        </nav>

    </header>

  )
  
}

export default Header;
