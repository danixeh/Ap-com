import axios from "axios"
import { useNavigate } from "react-router-dom"
import getConfig from "../../utils/getConfig"



const CardHome = ({ product }) => {

    const navigate = useNavigate()

    const handleClick = () => () => {
        navigate(`/product/${product.id}`)
    }

    // It add to cart products
    const handleAddCart = e => {
        e.stopPropagation()
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const obj = {
            id: product.id,
            quantity: 1
        }
        axios.post(URL, obj, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }


    return (
        <article onClick={handleClick()} className="card-home">
            <header className="card-header" >
                <img className="card-home_img" src={product.productImgs[0]} alt="" />
            </header>  
            <div className="card-home_body" >
                <h3 className="card-home_name" >{product.title}</h3>
                <section className="card-home_price-value" >
                    <h4 className="card-home_price-value" >price</h4>
                    <span>{product.price}</span>
                </section>
                <button onClick={handleAddCart} className="card-home_btn"><i className="fa-solid fs fa-cart-arrow-down"></i></button>

            </div>
    </article>
  )
}

export default CardHome

