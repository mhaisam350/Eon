import Head from "next/head";

import styles from '../../styles/CategoryPage.module.scss';

import Header from "../../components/Header";
import DisplaySubcategory from "../../components/DisplaySubcategory";
import Footer from "../../components/Footer";

// import { client } from "../../lib/shopify";

import { formatParam, storefront } from "../../utils";

export default function CategoryPage({ category }) {

    // console.log(category)

    const productTypes = [];

    const categoryProducts = category.products.edges;

    // console.log(categoryProducts);

    categoryProducts.forEach(product => {
        
        if (!productTypes.includes(product.node.productType)) {

            productTypes.push(product.node.productType);
            
        };

    });

    const title = category.title;

    return (

        <>

            <Head>
                <title>{ `${title} | Eon` }</title>
            </Head>

            <Header />

            <section className={styles['subcategories-container']}>

                <h1 className={styles['category-heading']}>{ title }</h1>
                
                {productTypes?.map((productType, index) => {

                    return (

                        <DisplaySubcategory products={categoryProducts} productType={productType} key={index} />

                    )

                })}
                
            </section>

            <Footer />

        </>

    )

}

export async function getStaticPaths() {

    const { data } = await storefront(`
        {
            collections(first: 20){
                edges{
                    node{
                        handle
                    }
                }
            }
        }
    `);

    return {
        paths: data.collections.edges.map((collection) => (

            { params: { categoryName: collection.node.handle } }

        )),
        fallback: false
    };

}

export async function getStaticProps({ params }) {

    // console.log(params.categoryName);

    const { data } = await storefront(singleCollectionQuery, { collection: params.categoryName } );
    const tes = 'asd'

    return {
        props: {
            category: data.collection
        },
        revalidate: 60
    };

}

const singleCollectionQuery = `
query ProductsInCollection($collection: String!) {
    collection(handle: $collection) {
      handle
      title
      products(first: 10) {
        edges {
          node {
            title
            handle
            tags
            productType
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 2) {
              edges {
                node {
                  url(transform: {maxWidth: 400})
                  altText
                }
              }
            }
          }
        }
      }
    }
  }
`;