import Head from "next/head";
import Link from "next/link";

import styles from '../../styles/CategoryPage.module.scss';

import Header from "../../components/Header";
import DisplaySubcategory from "../../components/DisplaySubcategory";
import Footer from "../../components/Footer";

import { client } from "../../lib/shopify";

import { formatParam } from "../../utils";

export default function CategoryPage({ products, categoryName }) {

    const productTypes = [];

    products.forEach(product => {
        
        if (!productTypes.includes(product.productType)) {

            productTypes.push(product.productType);
            
        };

    });

    const category = formatParam(categoryName);

    // console.log(productTypes);

    return (

        <>

            <Head>
                <title>{ category + " " + '| Eon' }</title>
            </Head>

            <Header />

            <section className={styles['subcategories-container']}>

                <h1 className={styles['category-heading']}>{ category }</h1>
                
                {productTypes?.map((productType, index) => {

                    return (

                        <DisplaySubcategory products={products} productType={productType} key={index} />

                    )

                })}
                
            </section>

            <Footer />

        </>

    )

}

export const getServerSideProps = async ({ params }) => {

    const { categoryName } = params;

    const categoriesData = await client.collection.fetchAllWithProducts();

    const categories = JSON.parse(JSON.stringify(categoriesData));

    const category = categories.find(category => category.handle === categoryName);

    console.log(category);

    return {
        props: {
            categoryName,
            products: category.products,
        },
    };

}