import axios from "axios"

const fetchProducts = async () => {
    return await fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };
  
  export default fetchProducts;