export const calculateTotal = (cartItems, products) => {
    return cartItems.reduce((total, cartItem) => {
        const product = products ? products.find(p => p.id === cartItem.id) : [];
        const price = product ? parseFloat(product.price) : 0;
        return total + (price * cartItem.quantity);
    }, 0).toFixed(2); // Formats the total to two decimal places
};