import { useEffect, useState } from 'react'
import axios  from "axios"
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './Components/routes/Home'
import Login from './Components/routes/Login'
import ProductDetail from './Components/routes/ProductDetail'
import Purchases from './Components/routes/Purchases'
import Header from './Components/shared/Header'
import Cart from './Components/shared/styles/Cart'
import ProtectedRoutes from './Components/routes/ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'




function App() {

  const dispatch = useDispatch()

  useEffect(() => { 
    dispatch(getAllProducts())
},[])
  


  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //   const obj = {      
  //       firstName: "Dax",
  //       lastName: "Daniel",
  //       email: "Dan@gmail.com",
  //       password: "pass5678",
  //       phone: "2345678911",
  //       role: "admin"
  //   }
  //   axios.post(URL, obj)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.error(err))
  // },[])

  return (
<div>
    <Header />

    <Routes>
        <Route path='/' element={<Home />} />        
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} /> 
        <Route element={<ProtectedRoutes />}>  
          <Route path='/Purchases' element={<Purchases />} /> 
          <Route path='/cart' element={<Cart />} />
        </Route>        
    </Routes>
  </div>
  )
}

export default App
