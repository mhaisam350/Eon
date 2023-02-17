import Head from 'next/head';

import { CartContextProvider } from '../contexts/CartContext';

import '../styles/globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false

function MyApp({ Component, pageProps }) {

  return (

    <>

      <Head>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
 
      </Head>
  
      <CartContextProvider>    
        
        <Component {...pageProps} />

      </CartContextProvider>

    </>

  )

}

export default MyApp;
