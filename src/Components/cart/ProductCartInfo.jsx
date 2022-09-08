import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'



const ProductCartInfo = ({ product, getAllProductsCart }) => {
    
    const handleDeleteProduct = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
        axios.delete(URL, getConfig())
            .then(res => getAllProductsCart())
            .catch(err => console.log(err))
    }
  return (
      <article className='cart_item'>
          <header className='cart_item-header' >
              <h4 className='cart_category' >{product.brand}</h4>
              <h3 className='cart_name' >{product.title}</h3>
              </header>
          <i onClick={handleDeleteProduct} className="can fa-solid fa-trash-can"></i>
          <span className='cart_quantity'>{product.productsInCart.quantity}</span>
          <div className='qtt'>
              <span className='cart_total-label' >Total: </span>
              <p className='cart_total-number' >{product.price}</p>
              </div>
  </article>
  )
}

export default ProductCartInfo