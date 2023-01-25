import { storefront } from ".";

export async function addToCart(cartId, itemId, quantity) {

    const response = await storefront(addItemToCartQuery, { cartId, lines: [ { merchandiseId: itemId, quantity } ] });

    return {
        statusCode: 200,
        body: response.data
    };

}

const addItemToCartQuery = `
    mutation addItemToCart($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
            id
            lines(first: 10) {
            edges {
                node {
                id
                quantity
                merchandise {
                    ... on ProductVariant {
                    id
                    title
                    image {
                        url
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
                            src
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
    }
`;