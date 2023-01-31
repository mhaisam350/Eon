import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { client } from '../lib/shopify';

export default function Home({ products }) {

  // console.log(products);

  return (

    <>

      <Head>
        <title>Eon</title>
      </Head>

      <Header />

      <main className={'flex' + " " + styles['hero']}>

        <div className={styles['hero-content']}>

          <h1 className={styles['hero-title']}>Eon Motors</h1>
          
        </div>

      </main>

      <section className={'grid' + " " + styles['categories']}>

        <article className={'flex' + " " + styles['category-article']} id={styles['accessories-article']}>
                
          <h2 className={styles['category-title']}>Bike Accessories</h2>

          <Link href='/categories/bike-accessories' className={styles['category-link']}>Learn More</Link>

        </article>

        <article className={'flex' + " " + styles['category-article']} id={styles['apparel-article']}>
                
            <h2 className={styles['category-title']}>Apparel</h2>

            <Link href='/categories/apparel' className={styles['category-link']}>Learn More</Link>

        </article>

        <article className={'flex' + " " + styles['category-article']} id={styles['lifestyle-article']}>
                
            <h2 className={styles['category-title']}>Lifestyle</h2>

            <Link href='/categories/lifestyle' className={styles['category-link']}>Learn More</Link>

        </article>

      </section>
      
      <Footer />

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
