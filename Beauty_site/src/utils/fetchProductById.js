import fetchProducts from './fetchProducts';

const fetchProductById = async (id) => {
    const products = await fetchProducts();

    const numericId = parseInt(id, 10);
    const product = products.find(pr => pr.id === numericId);
    return product;
};

export default fetchProductById;
