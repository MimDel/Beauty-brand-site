import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getReviews = async (productId) => {
  try {
    const response = await axios.get(`http://localhost:3000/products/${productId}/reviews`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const useProductReviews = (productId) => {
  return useQuery({
    queryKey: ['reviews', productId],
    queryFn: () => getReviews(productId), 
    enabled: !!productId,
  });
};