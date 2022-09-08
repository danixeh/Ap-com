import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'


const SimilarProducts = ({ productInfo }) => {

    const [filterProducts, setFilterProducts] = useState()

    const products = useSelector(state => state.products)

    console.log(products);
        
    useEffect(() => {
        if (productInfo) {
            const filter = products.filter(e => e.category.name === productInfo.category)
            setFilterProducts(filter)
        }
    },[])

    console.log(filterProducts)
 
  return (
      <div className='home_container-card'>
           { 
        filterProducts?.map(product => (
            <CardHome
                    key={product.id}
                    product={product}
                />
        ))
      }
      </div>
     
  )
}

export default SimilarProducts