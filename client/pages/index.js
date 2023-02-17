import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.scss';

import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {

  return (

    <>

      <Head>
        <title>Eon Motors</title>
      </Head>

      <Header />

      <main className={'flex' + " " + styles['hero']}>

        <div className={styles['hero-content']}>

          <h2 className={styles['hero-subheading']}>Introducing</h2>

          <h1 className={styles['hero-heading']}>The Scrambler</h1>

          <Link href='/scrambler'><button className={styles['hero-btn']}>Discover</button></Link>
          
        </div>

      </main>

      <section className={'flex' + " " + styles['categories']}>

        <article className={styles['category-article']} id={styles['lifestyle-article']}>
                
          <h2 className={styles['category-heading']}>Lifestyle</h2>

          <Link href='/categories/lifestyle'><button className={styles['category-btn']}>Shop Now</button></Link>

        </article>

        <article className={styles['category-article']} id={styles['apparel-article']}>
                
            <h2 className={styles['category-heading']}>Apparel</h2>

            <Link href='/categories/apparel'><button className={styles['category-btn']}>Shop Now</button></Link>

        </article>

      </section>

      <section className={'flex' + " " + styles['accessories']}>

        <div className={styles['accessories-content']}>

          <h2 className={styles['accessories-heading']}>Accessories</h2>

          <Link href='/categories/bike-accessories'><button className={styles['accessories-btn']}>Shop Now</button></Link>

        </div>

      </section>

      <Newsletter />
      
      <Footer />

    </>

  )
  
}
