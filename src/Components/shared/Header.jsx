import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
      <header className="header">  
          <NavLink to="/">
          <h1 className="header_logo">e-commerce</h1>
        </NavLink>
      <nav className="header_nav">
              <ul className="header_list">
                  
                  <li className="header_item">
                      <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/login'>
                          login
                      </NavLink>
                  </li>
                      
                  <li className="header_item">
                      <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/purchases'>
                            purchases
                      </NavLink>
                  </li>
                  <li className="header_item">
                      <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/Cart'>                          
                      cart
                      </NavLink>                
                  </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header