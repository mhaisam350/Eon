import styles from '../styles/Newsletter.module.scss';

const Newsletter = () => {

    return (
        
        <section className={styles['newsletter']}>

            <h2 className={styles['newsletter-heading']}>Subscribe to the Newsletter</h2>

            <p className={styles['newsletter-text']}>Register to receive email updates on the latest collections, items, 
            services and events from us.</p>

            <input type='email' placeholder='Email Address *' className={styles['newsletter-input']} />

            <button className={styles['newsletter-btn']}>Subscribe</button>

        </section>

    )

}

export default Newsletter;