import { useState, createContext, useContext } from 'react'; 

const CartContext = createContext();

export const  CartContextProvider = ({ children }) => {

    const [cartId, setCartId] = useState(null);
    const [cartToggled, setCartToggled] = useState(false);

    return (

        <CartContext.Provider value={ { cartId, setCartId, cartToggled, setCartToggled } }>
            { children }
        </CartContext.Provider>

    );

}

export const useCartContext = () => {

    return useContext(CartContext);

}