import styles from '../styles/QuantityForm.module.scss';

export default function QuantityForm( { quantity, maxQuantity, quantitySet } ) {

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

        <fieldset>

            <legend>

                <button onClick={decrement}>-</button>
                
                <input
                    type='number'
                    placeholder='Quantity'
                    value={quantity}
                    min={1}
                    max={maxQuantity}
                    readOnly
                />
                
                <button onClick={increment}>+</button>

            </legend>

        </fieldset>

    )

}