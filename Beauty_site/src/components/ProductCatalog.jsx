import React from 'react';
import ProductCard from './ProductCard';

const ProductCatalog = ({ prod, category }) => {
  // Ensure prod is not null before calling filter
  const filteredProducts = prod ? prod.filter(product => product.category === category) : [];

  return (
    <div className='flex w-full justify-center'>
      <div className='flex flex-wrap w-[80%] gap-4'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard
                id={product.id}
                images={product.images}
                title={product.title}
                description={product.description}
                price={product.price}
                category={product.category}
              />
              {console.log('PROD IMGS -->', product.images)}
            </div>
          ))
        ) : (
          <p>Loading products or no products found...</p>
        )}
      </div>
    </div>
  );
}

export default ProductCatalog;

