import React, { useEffect, useState } from 'react';
import Card from './Card';
import fetchProducts from '../utils/fetchProducts';

const BestSellersContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(fetchedProducts => {
      console.log('Fetched Products:', fetchedProducts); // Check what is actually fetched
      setProducts(fetchedProducts);
    }).catch(error => {
      console.error('Error fetching products:', error);
    });
  }, []);

  const bestSellers = products.filter(prod => prod.bestseller === true);

  return (
    <div className='flex flex-row justify-center w-full h-[750px] py-20 mb-[20px]'>
      <div className='flex flex-col items-center w-[80%]'>
        <p className='text-xl font-bold'>
          <span className='text-tertiary'>Best </span>
          <span className='text-primary'>Sellers</span>
        </p>
        <hr className="w-full h-1 bg-secondary mt-0 mb-8" />
        <div className='flex flex-row w-full justify-evenly overflow-x-auto custom-scrollbar'>
          {bestSellers.length > 0 ? (
            bestSellers.map((bestSeller) => (
              <div key={bestSeller.id}>
                <Card 
                  image1={bestSeller.images[0].url} 
                  image2={bestSeller.images[1].url} 
                  title={bestSeller.title} 
                  category={bestSeller.category}
                  id={bestSeller.id}
                />
              </div>
            ))
          ) : (
            <p>No best sellers found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BestSellersContainer;
