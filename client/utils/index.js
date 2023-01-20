// Format prices for products
export const formatPrice = (number) => {
    return Intl.NumberFormat("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 0}).format(number);
};

// Format params
export const formatParam = (param) => {
    param = param.replace(/\-[a-z]/g, letter => letter.toUpperCase());
    param = param.replace(/-/g, ' ');
    return param[0].toUpperCase() + param.slice(1);
};

// Fetch data from Shopify store
export async function storefront(query, variables = {}) {

    const response = await fetch(process.env.NEXT_PUBLIC_SHOPIFY_API_FETCH_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
        },
        body: JSON.stringify( { query, variables } ),
    });

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    };

    return response.json();

};