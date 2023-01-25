import { storefront } from ".";

export async function removeFromCart(cartId, lineId) {

    const response = await storefront(removeItemFromCartQuery, { cartId, lineIds: [lineId] });

    return response;

}

const removeItemFromCartQuery = `
    mutation removeItemFromCart($cartId: ID!, $lineIds: [ID!]!) {
        cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
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
                    priceV2 {
                        amount
                        currencyCode
                    }
                    product {
                        title
                        handle
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