import { useState } from 'react';

import Link from 'next/link';

import styles from '../styles/DisplayProduct.module.scss';

import { formatPrice } from '../utils';

export default function DisplayProduct( { product } ) {

    // console.log(product);

    const price = product.variants[0].price.amount;

    const [hover, setHover] = useState(false);

    return (

        <article className={styles['product-container']} onMouseEnter={ () => setHover(true) } onMouseLeave={ () => setHover(false) }>

            <Link href={`/products/${product.handle}`} className={styles['product-link']}>

                <div className={styles['image-container']} style={ {backgroundImage: hover ? `url("${product?.images[1].src}")` : `url("${product?.images[0].src}")`} }></div>

                <div className={styles['text-container']}>

                    <h3 className={styles['product-name']}>{ product.title }</h3>

                    <p className={styles['product-price']}>{formatPrice(price)}</p>

                </div>

            </Link>

        </article>

    )

}