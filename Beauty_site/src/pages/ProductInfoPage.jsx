import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay';
import ProductDetailsHowToUse from '../components/ProductDetailsHowToUse';
import fetchProductById from '../utils/fetchProductById';

const ProductInfoPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await fetchProductById(id);

      if (fetchedProduct) {
        setProduct(fetchedProduct);
      } else {
        console.error('Fetched product is null or undefined');
      }
    };

    fetchProduct().catch((error) => {
      console.error('Error fetching product:', error);
    });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProductDisplay prod={product} />
      <ProductDetailsHowToUse prod={product} />
    </div>
  );
};

export default ProductInfoPage;
