import { useState, useEffect } from 'react';

import Head from 'next/head';

import Header from '../../components/Header';
import EmblaCarousel from '../../components/EmblaCarousel';
import OptionsForm from '../../components/OptionsForm';
import QuantityForm from '../../components/QuantityForm';
import Footer from '../../components/Footer';

import { useCartContext } from '../../contexts/CartContext';

import { storefront } from '../../utils';
import { formatPrice } from '../../utils';

import { addToCart } from '../../utils/addToCart';

import styles from '../../styles/ProductPage.module.scss';

export default function ProductPage( { product } ) {

    // console.log(product);

    const { title, description, priceRange, images, variants, options } = product;

    const { amount } = priceRange.minVariantPrice;

    const { edges } = images;

    const emblaOptions = { loop: true };

    const variantOptions = variants.edges?.map(variant => {

        const variantOptions = {};

        variant.node.selectedOptions.map(item => {
            variantOptions[item.name] = item.value;
        });

        return ({
            id: variant.node.id,
            title: product.title,
            options: variantOptions,
            variantTitle: variant.node.title,
            variantImage: variant.node.image.url,
            variantPrice: variant.node.priceV2.amount,
            variantQuantity: variant.node.quantityAvailable
        });

    });

    const defaultValues = {};

    options.map(item => {

        defaultValues[item.name] = item.values[0];

    });

    const [selectedVariant, setSelectedVariant] = useState(variantOptions[0].id);
    const [selectedOptions, setSelectedOptions] = useState(defaultValues);
    const [quantityAvailable, setQuantityAvailable] = useState(variantOptions[0].variantQuantity);
    const [quantity, setQuantity] = useState(1);

    const { cartId, setCartToggled } = useCartContext();

    function optionsSet(name, value) {

        setSelectedOptions(prevState => {
            return { ...prevState, [name]: value};
        });

    };

    function quantitySet(quantity) {

        setQuantity(quantity);

    };

    useEffect(() => {

        let matchingVariant = variantOptions.filter(variant => JSON.stringify(Object.values(variant.options)) === JSON.stringify(Object.values(selectedOptions)));

        setSelectedVariant(matchingVariant[0].id);
        setQuantityAvailable(matchingVariant[0].variantQuantity);

    }, [selectedOptions]);

    // console.log(variantOptions);

    const handleAddToCart = async () => {

        console.log(`--- Adding to cart ---`);

        const localCart = JSON.parse(window.localStorage.getItem('CART')).cart.cartId;

        if (localCart !== cartId) {

            console.log('ERROR: Cart Id not matched - productHandle.js:100');

            return; 

        };

        await addToCart(localCart, selectedVariant, quantity);

        setCartToggled(true);

        window.localStorage.setItem('CART_STATUS', 'dirty');
        
    }

    return (

        <>
        
            <Head>
                <title>{ `${title} | Eon` }</title>
            </Head>

            <Header />

            <section className={'grid' + " " + styles['product-container']}>

                <div className={styles['product-image-container']}>

                    <EmblaCarousel slides={edges} options={emblaOptions} />
                
                </div>

                <div className={styles['product-content']}>

                    <h1 className={styles['product-name']}>{ title }</h1>
                    
                    <h2 className={styles['product-price']}>{ formatPrice(amount) }</h2>

                    {

                        options.map( ( { name, values } ) => (

                            <OptionsForm key={`key-${name}`} name={name} values={values} selectedOptions={selectedOptions} optionsSet={optionsSet} quantitySet={quantitySet} />

                        ))

                    }
                        
                    {quantityAvailable > 0 ? (

                        <>
                        
                            <QuantityForm quantity={quantity} maxQuantity={quantityAvailable} quantitySet={quantitySet} />

                            <div className={'flex' + " " + styles['purchase-container']}>

                                <button onClick={handleAddToCart} className={styles['product-btn']} id={styles['add-to-cart-btn']}>Add to Cart</button>

                                <button className={styles['product-btn']} id={styles['buy-now-btn']}>Buy Now</button>

                            </div>

                        </>

                    ) : (

                        <button disabled className={styles['product-btn']} id={styles['out-of-stock-btn']}>Out of stock</button>

                    )}

                    <article className={styles['description-container']}>

                        <h3 className={styles['description-heading']}>Description</h3>

                        <p className={styles['product-description']}>{ description }</p>

                    </article>

                </div>

            </section>

            <Footer />
        
        </>

    )

}

export const getServerSideProps = async ( { params } ) => {

    const { productHandle } = params;

    const { data } = await storefront(singleProductQuery, { handle: productHandle } );

    // console.log(data);

    return {
        props: {
            product: data.product,
        },
    };

}

const singleProductQuery = `
    query SingleProduct($handle: String!) {
        product(handle: $handle) {
        id
        title
        description
        totalInventory
        priceRange {
            minVariantPrice {
            amount
            currencyCode
            }
        }
        images(first: 3) {
            edges {
            node {
                url(transform: {maxWidth: 600})
            }
            }
        }
        options(first: 20) {
            id
            name
            values
        }
        variants(first: 20) {
            edges {
            node {
                id
                title
                quantityAvailable
                image {
                    url(transform: {maxWidth: 600})
                altText
                    }
                selectedOptions {
                name
                value
                }
                priceV2 {
                amount
                currencyCode
                }
            }
            }
        }
        }
    }`;

// export const getServerSideProps = async ( { params } ) => {

//     const { productHandle } = params;

//     const product = await client.product.fetchByHandle(productHandle);

//     return {
//         props: {
//             product: JSON.parse(JSON.stringify(product)),
//         },
//     };

// }
