import { storefront } from ".";

export async function createCart() {

    const response = await storefront(createCartQuery, {});

    if (!response.data) {

        return {
          statusCode: 500,
          body: JSON.stringify({ message: 'Error creating cart' }),
        }

      };
  
      return {
        statusCode: 200,
        body: {
          cartId: response.data.cartCreate?.cart?.id,
        }
      };

}

const createCartQuery = `
    mutation createCart {
    cartCreate {
            cart{
        checkoutUrl
        id
        } 
    }
    }
`;