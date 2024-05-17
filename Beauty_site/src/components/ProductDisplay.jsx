import React, { useState, useEffect } from 'react';
import Button from './Button';
import { useParams } from 'react-router-dom';
import fetchProductById from '../utils/fetchProductById';
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const ProductDisplay = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const { increaseQuantity } = useShoppingCart()

    const numericId = parseInt(id, 10);

    useEffect(() => {
        const fetchProduct = async () => {
            const fetchedProduct = await fetchProductById(id);
            setProduct(fetchedProduct);
            setCurrentImage(fetchedProduct.images[0].url);
        };

        fetchProduct();
    }, [id]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    const { title, description, price, ingredients, images } = product; //destructure product

    return (
        <div className='flex w-full justify-center my-16'>
            <div className='flex flex-row justify-evenly w-[80%]'>
                <div className='flex flex-row'>
                    <div className='flex flex-col mr-5'>
                        {images.map((image, index) => (
                            <img
                                key={index}
                                className='bg-secondary rounded border-2 w-[75px] h-[75px] mb-4 cursor-pointer'
                                src={image.url}
                                alt={title}
                                onClick={() => setCurrentImage(image.url)}
                            />
                        ))}
                    </div>
                    <img className='w-[435px] h-[435px] rounded-lg border-2' src={currentImage} alt={title} />
                </div>
                <div className='flex flex-col w-[30%]'>
                    <div className='flex flex-col h-full justify-between'>
                        <div>
                            <p className='text-lg leading-tight font-semibold mb-4'>{title}</p>
                            <p className='text-md mb-4'>{description}</p>
                            <p className='text-md'>€ {price}</p>
                        </div>
                        <button
                            className="text-primary bg-secondary mt-4"
                            onClick={toggleDropdown}
                        >
                            {isDropdownOpen ? 'Hide Ingredients' : 'Show Ingredients'}
                        </button>
                        {isDropdownOpen && (
                            <div className="mt-2 max-h-32 overflow-y-auto p-2 border border-secondary rounded">
                                {ingredients}
                            </div>
                        )}
                        <div className='flex flex-col  justify-end  w-[255px]' onClick={() => {increaseQuantity(numericId)}} >
                            <Button title="ADD TO BAG" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;

