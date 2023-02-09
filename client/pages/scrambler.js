import Head from 'next/head';

import styles from '../styles/Scrambler.module.scss';

import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Scrambler() {

  return (

    <>
    
        <Head>
            <title>Scramber | Eon Motors</title>
        </Head>

        <Header />

        <Newsletter />

        <Footer />

    </>

  )

}