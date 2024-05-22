import axios from 'axios';

const addReviewToProduct = async (productId, review) => {
  const token = localStorage.getItem('token'); 
  
  try {
    const response = await axios.post(`http://localhost:3000/products/${productId}/reviews`, review, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding review:', error);
    throw error;
  }
};

export { addReviewToProduct };
