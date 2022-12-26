import Head from 'next/head';

import { client } from '../lib/shopify';

import styles from '../styles/Home.module.css';

export default function Home({ products }) {

  console.log(products);

  return (

    <>

      <Head>
        <title>Eon</title>
      </Head>

      <main>

        <h1>Shop</h1>

      </main>

    </>

  )
  
}

export const getStaticProps = async () => {

  const products = await client.product.fetchAll();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  };

};
