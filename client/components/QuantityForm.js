import styles from '../styles/QuantityForm.module.scss';

export default function QuantityForm( { quantity, maxQuantity, quantitySet } ) {

    const cursorIncrementClass = quantity === maxQuantity ? styles['quantity-btn-disallowed'] : styles['quantity-btn-pointer'];

    const cursorDecrementClass = quantity === 1 ? styles['quantity-btn-disallowed'] : styles['quantity-btn-pointer'];

    function increment() {

        if (quantity < maxQuantity) {

            quantitySet(quantity + 1);

        };

    };

    function decrement() {

        if (quantity > 1) {

            quantitySet(quantity - 1);

        };

    };

    return (

        <fieldset className={styles.fieldset}>

            <legend className={styles.legend}>Quantity</legend>

                <button className={styles['quantity-btn'] + " " + cursorDecrementClass} onClick={decrement}>-</button>
                
                <input
                    className={styles.input}
                    type='number'
                    placeholder='Quantity'
                    value={quantity}
                    min={1}
                    max={maxQuantity}
                    readOnly
                />
                
                <button className={styles['quantity-btn'] + " " + cursorIncrementClass} onClick={increment}>+</button>

        </fieldset>

    )

}