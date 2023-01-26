import { useState, useEffect } from "react";

import Link from "next/link";

import LoadingSpinner from "./LoadingSpinner";

import { useCartContext } from "../contexts/CartContext";

import { displayCart } from "../utils/displayCart";
import { createCart } from "../utils/createCart";
import { removeFromCart } from "../utils/removeFromCart";

import { formatPrice } from "../utils";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Cart.module.scss';

export default function Cart() {

    const [products, setProducts] = useState([]);
    const [cost, setCost] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { cartId, setCartId, cartToggled } = useCartContext();

    // console.log(products);

    // Create or load existing cart from local storage
    useEffect(() => {

        async function handleCart() {

            let cartData = JSON.parse(
                window.localStorage.getItem('CART')
            );

            if (cartData) {

                setIsLoading(true);

                console.log('--- Retrieving cart ---');

                setCartId(cartData.cart.cartId);

                const existingCart = await displayCart(cartData.cart.cartId);

                setProducts(existingCart.body.cart.lines.edges);
                setCost(existingCart.body.cart.estimatedCost);

                setIsLoading(false);

                return;

            };

            console.log('--- Creating cart ---');

            cartData = await createCart();

            const storage = {
                cart: cartData.body,
                timeCreated: new Date().getTime(),
            };

            setCartId(cartData.body.cartId);

            window.localStorage.setItem(
                'CART',
                JSON.stringify(storage)
            );

        };

        handleCart();

        const interval = setInterval(() => {

            const cartStatus = window.localStorage.getItem('CART_STATUS');

            if (cartStatus && cartStatus === 'dirty') {

                handleCart();

                window.localStorage.setItem('CART_STATUS', 'clean');

            };

        }, 300);

        return () => {

            clearInterval(interval);

        };

    }, []);

    const handleRemoveFromCart = async (itemId) => {

        setIsLoading(true);

        console.log('--- Removing from cart ---');

        await removeFromCart(cartId, itemId);

        window.localStorage.setItem('CART_STATUS', 'dirty');

        setIsLoading(false);

        return;

    };

    const emptyCart = () => {

        window.localStorage.removeItem('CART');

        window.localStorage.setItem('CART_STATUS', 'dirty');

        setCartId(null);
        setProducts([]);
        setCost({});

    }

    return (

        <aside className={styles['cart-container']}>

            <h2 className={styles['cart-heading']}>Cart</h2>

            {isLoading && 

                <LoadingSpinner />

            }

            {products.length > 0 && Object.keys(cost).length > 0 && cost.totalTaxAmount ? (
                
                <div className={styles['cart-subcontainer']}>

                    <div className={styles['cart-products']} id={'cart-products'} >

                        {products.map((item, index) => {

                        // console.log(item);
                        item = item.node;

                            return (

                                <article key={index} className={'flex' + " " + styles['product']}>

                                    <Link href={`/store/products/${item.merchandise.product.handle}`}>
                                        
                                        <img src={item.merchandise.image?.url} className={styles['product-img']} />
                                        
                                    </Link>
                                
                                    <div className={styles['product-details']}>

                                        <Link href={`/store/products/${item.merchandise.product.handle}`}>
                                            
                                            <h3 className={styles['product-name']}>{item.merchandise.product.title}</h3>
                                            
                                        </Link>

                                        <p className={styles['product-variant']}>{item.merchandise.title}</p>

                                            <div className={'flex' + " " + styles['product-subcontainer']}>

                                                <p className={styles['product-quantity']}>x {item.quantity}</p>

                                                <div>

                                                    <p className={styles['product-cost']}>{formatPrice(item.merchandise.priceV2.amount)}</p>
                                                    
                                                    <button className={styles['remove-btn']} onClick={() => {
                                                        handleRemoveFromCart(item.id);
                                                    }}><FontAwesomeIcon icon={faTrash} /></button>

                                                </div>

                                            </div>

                                    </div>
                                    
                                    
                                </article>
                                
                            )

                        })}

                    </div>

                    <section className={styles['static-container']}>

                        {/* {console.log(cost)} */}
                        <p className={styles['subtotal']}>Subtotal: {cost.subtotalAmount.amount + ' ' + cost.subtotalAmount.currencyCode}</p>
                        <p className={styles['subtotal']}>Taxes: {cost.totalTaxAmount.amount + ' ' + cost.totalTaxAmount.currencyCode}</p>
                        <p className={styles['grand-total']}>Grand Total: {cost.totalAmount.amount + ' ' + cost.totalAmount.currencyCode}</p>

                        <button className={styles['cart-btn']} id={styles['checkout-btn']}>Checkout</button>
                        <button onClick={emptyCart} className={styles['cart-btn']} id={styles['empty-btn']}>Empty Cart</button>
                
                    </section>

                </div>

             ) : (

                <div className={styles['cart-subcontainer']}>
                    <p className={styles['cart-message']}>Your cart is empty.</p>
                </div>
            

            )}

        </aside>

    )

}