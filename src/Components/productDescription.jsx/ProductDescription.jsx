import { useState } from "react"


const ProductDescription = ({ productInfo }) => {

    const [counter, setCounter] = useState(1)



    const handlePlus = () => setCounter(counter + 1)
    
    const handleLess = () => {
        if (counter - 1 >= 1) {
            setCounter(counter - 1)
        }
    }
        
        console.log(productInfo)
  return (
      <section className="product-des">
          <h2 className='product-info_name'>{productInfo?.title}</h2>
          <p className='product-info_description'>{productInfo?.description}</p>
          <div className='product-info_body' >
              <article className='product-info_price' >
              <h3 className='product-price-label' >Price</h3>
              <span className='product-price-value'>{productInfo?.price}</span>
              </article>
              <article className='product-info_quantity'>
                  <h3 className='product-info_quantity-label'>Quantity</h3>
                  <div className="product-info_Quantity-">
                      <button className="btn-d" onClick={handleLess}></button>
                      <div className="number" >{counter}</div>
                      <button className="btn-d" onClick={handlePlus}></button>
                  </div>


              </article>
          </div>
      
      
      
      </section>
      
  )
}

export default ProductDescription