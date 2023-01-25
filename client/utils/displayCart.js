import { storefront } from ".";

export async function displayCart(cartId) {

    const response = await storefront(displayCartQuery, { cartId });

    return {
      statusCode: 200,
      body: response.data,
    };

}

const displayCartQuery = `
    query getCart($cartId: ID!) {
        cart(id: $cartId) {
        id
        lines(first: 100) {
            edges {
            node {
                id
                quantity
                merchandise {
                ... on ProductVariant {
                    id
                    title
                    image {
                    url(transform: {maxWidth: 100})
                    altText
                    }
                    priceV2 {
                    amount
                    currencyCode
                    }
                    product {
                    title
                    handle
                    images(first: 1) {
                        edges {
                        node {
                            url(transform: {maxWidth: 100})
                            altText
                        }
                        }
                    }
                    }
                }
                }
            }
            }
        }
        estimatedCost {
            totalAmount {
            amount
            currencyCode
            }
            subtotalAmount {
            amount
            currencyCode
            }
            totalTaxAmount {
            amount
            currencyCode
            }
            totalDutyAmount {
            amount
            currencyCode
            }
        }
        }
    }
`;