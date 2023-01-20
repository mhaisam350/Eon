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