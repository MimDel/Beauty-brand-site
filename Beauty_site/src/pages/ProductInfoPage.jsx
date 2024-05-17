import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../components/ProductDisplay'
import ProductDetailsHowToUse from '../components/ProductDetailsHowToUse'

const ProductInfoPage = () => {

    let {productId } = useParams()

  return (
    <div>
      <ProductDisplay />
      <ProductDetailsHowToUse />
    </div>
  )
}

export default ProductInfoPage
