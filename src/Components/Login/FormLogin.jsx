import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'



const FormLogin = () => {

    const { register, handleSubmit, reset } = useForm()
       
    const submit = data => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.data.token)
            })
      .catch(err => console.error(err))
        reset({      
                      email: "Dan@gmail.com",
                      password: "pass5678",                 
        })
        }

  return (
      <form onSubmit={handleSubmit(submit)} className='login__form'>
          <h2 className='login__title'>Welcome! Enter your email and password to continue</h2>
          <div className='signal'>
              <h2 className='signal-t'>Test Data</h2>
              <div className='signal-h'>
                  <i className="fa-thin fa fa-envelope"></i>
                  <p className='signal-i'>email: Dan@gmail.com</p>
              </div>
              <div className='signal-h'>
              <i className="fa-solid fa fa-lock"></i>
                  <p className='signal-i' >password: pass5678</p>
              </div>
          </div>
          <div className='login__div-email'>
              <label className='login__label' htmlFor="email">Email</label>
              <input {...register('email')} className='login__input' type="email" id="email" />
          </div>
          <div className='login__div-password'>
              <label className='login__label' htmlFor="password">Password</label>
              <input {...register('password')} className='login__input' type="password" id="password" />
          </div>
          <button className='login__btn' >Login</button>

      </form>
  )
}

export default FormLogin