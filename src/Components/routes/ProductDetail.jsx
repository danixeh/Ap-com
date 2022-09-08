import axios from "axios"
import { useState, useEffect, react } from "react"
import { useParams } from "react-router-dom"
import ProductDescription from "../productDescription.jsx/ProductDescription"
import SimilarProducts from "../productDescription.jsx/SimilarProducts"



const ProductDetail = () => {

  const { id } = useParams()

  const [productInfo, setProductInfo] = useState()


  useEffect(() => {
    const URL =`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProductInfo(res.data.data.product))
       .catch(err => console.log(err))
  },[])

  console.log(productInfo)

  return (
    <div>
      <ProductDescription productInfo={productInfo} />
      <SimilarProducts productInfo={productInfo} />
    </div>
  )
}

export default ProductDetail