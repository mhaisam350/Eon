import { useEffect } from "react";

import { useCartContext } from "../contexts/CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCartShopping} from '@fortawesome/free-solid-svg-icons';

import Cart from "./Cart";

import styles from '../styles/Sidebar.module.scss';

export default function Sidebar() {

    const { cartToggled, setCartToggled } = useCartContext();

    const iconColor = cartToggled ? styles['icon-dark'] : styles['icon-light'];
    const overlayDisplay = cartToggled ? styles['overlay-show'] : styles['overlay-hide'];

    const overlayControl = (e) => {

        if (e.target.id === 'overlay-container') {

            setCartToggled(false);

        };

    }

    useEffect(() => {

        cartToggled ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";

    }, [cartToggled])

    return (

        <>
        
            <button onClick={() => setCartToggled(!cartToggled)} className={styles['icon'] + " " + iconColor}><FontAwesomeIcon icon={ cartToggled ? faXmark : faCartShopping} /></button>

            <section onClick={overlayControl}  className={styles['overlay-container'] + " " + overlayDisplay} id={'overlay-container'}>

                <Cart />

            </section>

        </>

    )

}