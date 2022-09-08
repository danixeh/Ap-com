import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../../utils/getConfig'
import ProductCartInfo from '../../cart/ProductCartInfo'


const Cart = () => {

    const [cartProducts, setCartProducts] = useState()
    const [sum, setSum] = useState()
    
    const getAllProductsCart = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL, (getConfig()))
            .then(res => setCartProducts(res.data.data.cart.products))
            .catch(err => setCartProducts())
    }

    useEffect(() => {
        if (cartProducts) {
            const sumAll = cartProducts?.map(product => parseInt(product.price)).reduce((prev, curr) => prev + curr, 0)
        setSum(sumAll)
        }
    },[cartProducts])

    useEffect(() => {
        getAllProductsCart()        
    }, [])

   

    console.log(sum);

    console.log(cartProducts)

    const handleCheckout = () => {
        const URL ='https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        const obj = {
            "street": "Green St. 1456",
            "colony": "Southwest",
            "zipCode": 12345,
            "city": "USA",
            "references": "Some references" 
        }
        axios.post(URL, obj, getConfig())
            .then(res => {
                getAllProductsCart()
                console.log(res.data)
            })
            .catch(err => console.log(err))
       
    
}


    return (
        <section className='cart' > 
            <h2>Shopping Cart</h2>            
            <div>
                {
                    cartProducts?.map(product => (
                        <ProductCartInfo
                            key={product.id}
                            product={product}
                            getAllProductsCart={getAllProductsCart} />
                ))
            }
                </div>
       
            <hr className='cart_hr' />
            <footer className='cart_footer' >
                <span className='cart_total-global-label' >Total:</span>
                <p className='cart_total-global-value' >{sum}</p>
            </footer>
            <button onClick={handleCheckout} className='cart_btn' >Checkout</button>
    </section>
  )
}

export default Cart