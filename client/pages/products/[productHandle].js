import Head from 'next/head';
import Image from 'next/image';

import styles from '../../styles/ProductPage.module.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { client } from '../../lib/shopify';

import { formatParam } from '../../utils';

export default function ProductPage( { product } ) {

    console.log(product);

    // const { id, title } = product;
    // const productImages = product.images;

    return (

        <>
        
            <Head>
                {/* <title>{ `${title} | Eon` }</title> */}
            </Head>

            <Header />

            {/* <section className={'grid' + " " + styles['product-container']}>

                <div className={styles['product-image-container']}>
                    <Image src={productImages[0].src} alt={title} fill style={{objectFit: 'cover'}} />
                </div>

                <div className={styles['product-content']}>

                    <h1 className={styles['product-name']}>{title}</h1>
                    
                    <h2 className={styles['product-price']}>123</h2>



                </div>

            </section> */}

            <Footer />
        
        </>

    )

}

export const getServerSideProps = async ( { params } ) => {

    const { productHandle } = params;

    const product = await client.product.fetchByHandle(productHandle);

    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        },
    };

}

// export const getServerSideProps = async ( { params } ) => {

//     const { productHandle } = params;

//     const productQuery = client.graphQLClient.query((root) => {
        
//         root.addConnection('productByHandle', { args: { handle: productHandle } }, (product) => {

//             product.add('id');
//             product.add('title');
//             product.add('description');

//             product.addConnection('variants', { args: { first: 10 } }, (variant) => {

//                 variant.add('id');
//                 variant.add('title');
//                 variant.add('quantityAvailable');

//                 variant.addConnection('selectedOptions', (options) => {

//                     options.add('name');
//                     options.add('value');

//                 });

//                 variant.addConnection('priceV2', (price) => {

//                     price.add('amount');
//                     price.add('countryCode');

//                 });

//             });

//             product.addConnection('options', { args: { first: 10 } }, (option) => {

//                 option.add('id');
//                 option.add('name');
//                 option.add('values');

//             });

//             product.addConnection('images', { args: { first: 5 } }, (image) => {

//                 image.add('url');

//             });

//         });

//     });

//     const product = await client.graphQLClient.send(productQuery);

//     console.log(product);

//     return {
//         props: {
//             product: JSON.parse(JSON.stringify(product)),
//         },
//     };



// const singleProductQuery = `
// query SingleProduct($handle: String!){
//     product(handle: $handle) {
//       id
//       title
//       description
//       totalInventory
//       priceRange{
//         minVariantPrice{
//           amount
//           currencyCode
//         }
//       }
//       images(first: 5){
//         edges {
//           node {
//             url(transform: {
//                 maxWidth: 900
//             })
//             altText 
//           }
//         }
//       }
//       options(first: 10) {
//         id
//         name
//         values
//       }
//       variants(first: 10) {
//         edges {
//           node {
//             id
//             title
//             quantityAvailable
//             image {
//                 url(transform: {maxWidth: 600})
//                 altText
//             }
//             product {
//                 title
//                 handle
//               }
//             selectedOptions {
//                 name
//                 value
//               }
//             priceV2{
//               amount
//               currencyCode
//             }
//           }
//         }
//       }
//     }
//   }
// `;