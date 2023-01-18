import styles from '../styles/DisplaySubcategory.module.scss';

import DisplayProduct from './DisplayProduct';

export default function DisplaySubcategory( { products, productType } ) {

    const subcategoryProducts = products.filter(product => product.productType === productType);

    // console.log(subcategoryProducts);

    return (

        <section className={styles['subcategory-container']}>

            <h2 className={styles['subcategory-heading']}>{ productType }</h2>

            <div className={'grid' + " " + styles['products-container']}>

                {subcategoryProducts?.map((product, index) => {

                    return (

                        <DisplayProduct product={product} key={index} />

                    )

                })}

            </div>

            

        </section>       

    )

}