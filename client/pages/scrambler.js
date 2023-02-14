import { useState, useEffect, useRef } from 'react';

import Head from 'next/head';

import styles from '../styles/Scrambler.module.scss';

import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Scrambler() {

    const [overlayToggled, setOverlayToggled] = useState(false);

    const overlayDisplay = overlayToggled ? styles['features-overlay-show'] : styles['features-overlay-hidden'];

    const overlayRef = useRef(null);

    const handleWheel = (e) => {

        if (e.deltaY === 0) return;

        const element = e.currentTarget;

        e.preventDefault();

        element.scrollTo({
            left: element.scrollLeft + e.deltaY,
            behavior: 'auto'
        });

    }

    useEffect(() => {

        overlayToggled ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "visible";

        if (overlayToggled) overlayRef.current.scrollTo(0,0);

    }, [overlayToggled])

  return (

    <>
    
        <Head>
            <title>Scramber | Eon Motors</title>
        </Head>

        <Header />

        <main className={styles.hero}>

            <div className={'flex' + " " + styles['hero-text-container']}>

                <div className={styles['hero-text']}>

                    <h1 className={styles['hero-heading']}>Scrambler</h1>

                    <h2 className={styles['hero-subheading']}>Vivamus sodales auctor.</h2>

                </div>

            </div>

            <div className={styles['hero-image-container']}>

                <img className={styles['hero-image']} src='/scrambler/scrambler-red.png' />

            </div>

        </main>

        <section className={styles['description']}>

            <h2 className={styles['description-heading']}>The Future is Here</h2>

            <p className={styles['description-paragraph']}>Mauris sodales ornare ex quis placerat. Nulla sit amet turpis gravida arcu faucibus scelerisque. 
            Maecenas congue consequat nunc, at aliquam neque. Vestibulum rhoncus in nisi sed sollicitudin.</p>

            <button className={styles['description-btn']}>Learn More</button>

        </section>

        <section className={styles['banner']}>

            <div className={'flex' + " " + styles['banner-flex']}>

                <div className={styles['banner-text']}>

                    <h2 className={styles['banner-heading']}>All About You</h2>

                    <p className={styles['banner-paragraph']}>Donec felis ligula, porttitor eget mauris vulputate, sollicitudin interdum magna. 
                    Vestibulum mollis fermentum faucibus.</p>

                </div>

                <img className={styles['banner-image']} src='/scrambler/banner.jpg' />

            </div>

        </section>

        <section className={'flex' + " " + styles['features']}>

            <div className={'flex' + " " + styles['features-content']}>

                <div className={styles['features-text']}>

                    <h3 className={styles['features-subheading']}>Built to Perfection</h3>    

                    <h2 className={styles['features-heading']}>Unlike Any Other</h2>
                
                </div>

                <button className={styles['features-btn']} onClick={(e) => setOverlayToggled(!overlayToggled)}>Discover</button>

            </div>

            <section ref={overlayRef} className={'flex' + " " + styles['features-overlay'] + " " + overlayDisplay} onWheel={handleWheel}>

                <article className={'flex' + " " + styles['feature']}>

                    <div className={'flex' + " " + styles['feature-text']}>

                        <h4 className={styles['feature-subheading']}>Subheading</h4>
                        
                        <h3 className={styles['feature-heading']}>Heading</h3>

                        <p className={styles['feature-paragraph']}>Nulla a neque feugiat, vestibulum magna quis, volutpat lacus. Curabitur vitae risus vel erat bibendum hendrerit. 
                            Phasellus sed interdum nisl. Nunc viverra laoreet ex nec sagittis.</p>
    
                        <button onClick={(e) => setOverlayToggled(!overlayToggled)}>Close</button>

                    </div>

                    <div className={styles['feature-img']} id={styles['feature-1']}></div>

                </article>

                <article className={'flex' + " " + styles['feature']}>

                    <div className={'flex' + " " + styles['feature-text']}>

                        <h4 className={styles['feature-subheading']}>Subheading</h4>
                        
                        <h3 className={styles['feature-heading']}>Heading</h3>

                        <p className={styles['feature-paragraph']}>Nulla a neque feugiat, vestibulum magna quis, volutpat lacus. Curabitur vitae risus vel erat bibendum hendrerit. 
                            Phasellus sed interdum nisl. Nunc viverra laoreet ex nec sagittis.</p>
    
                        <button onClick={(e) => setOverlayToggled(!overlayToggled)}>Close</button>

                    </div>

                    <div className={styles['feature-img']} id={styles['feature-2']}></div>

                </article>

                <article className={'flex' + " " + styles['feature']}>

                    <div className={'flex' + " " + styles['feature-text']}>

                        <h4 className={styles['feature-subheading']}>Subheading</h4>
                        
                        <h3 className={styles['feature-heading']}>Heading</h3>

                        <p className={styles['feature-paragraph']}>Nulla a neque feugiat, vestibulum magna quis, volutpat lacus. Curabitur vitae risus vel erat bibendum hendrerit. 
                            Phasellus sed interdum nisl. Nunc viverra laoreet ex nec sagittis.</p>
    
                        <button onClick={(e) => setOverlayToggled(!overlayToggled)}>Close</button>

                    </div>

                    <div className={styles['feature-img']} id={styles['feature-3']}></div>

                </article>

            </section>

        </section>

        <section className={styles['specs']}>

            <div className={'flex' + " " + styles['specs-flex']}>

                <img className={styles['specs-image']} src='/scrambler/specs.jpg' />

                <section className={styles['specs-content']}>

                    <h2 className={styles['specs-heading']}>Scrambler Specs</h2>

                    <div className={'flex' + " " + styles['specs-details-flex']}>

                        <ul className={styles['specs-list']}>

                            <li className={styles['specs-list-item']}>

                                <h3 className={styles['list-heading']}>Displacement</h3>

                                800cc

                            </li>

                            <li className={styles['specs-list-item']}>

                                <h3 className={styles['list-heading']}>Power</h3>

                                73 hp @ 8250 rpm

                            </li>

                            <li className={styles['specs-list-item']}>

                                <h3 className={styles['list-heading']}>Torque</h3>

                                48 lb-ft

                            </li>

                            <li className={styles['specs-list-item']}>

                                <h3 className={styles['list-heading']}>Gearbox</h3>

                                6 speed

                            </li>

                            <li className={styles['specs-list-item']}>

                                <h3 className={styles['list-heading']}>Bore x stroke</h3>

                                88 x 66 mm

                            </li>

                            <li className={styles['specs-list-item']}>

                                <h3 className={styles['list-heading']}>Compression ratio</h3>

                                11:1

                            </li>

                        </ul>

                        <ul className={styles['specs-list']}>

                            <li className={styles['specs-list-item']}>

                                <h3 className={styles['list-heading']}>Fuel tank capacity</h3>

                                13.5 l

                            </li>

                            <li className={styles['specs-list-item']}>

                                <h3 className={styles['list-heading']}>Seats</h3>

                                2

                            </li>

                            <li className={styles['specs-list-item']}>

                                <h3 className={styles['list-heading']}>Frame</h3>

                                Tubular

                            </li>

                            <li className={styles['specs-list-item']}>

                                <h3 className={styles['list-heading']}>CO2 emissions</h3>

                                150 g/km

                            </li>

                            <li className={styles['specs-list-item']}>

                                <h3 className={styles['list-heading']}>Warranty</h3>

                                24 months

                            </li>

                        </ul>

                    </div>

                </section>

            </div>

        </section>

        <Newsletter />

        <Footer />

    </>

  )

}