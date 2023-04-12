import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
        <h3>Fake Store</h3>
        <ul>
            <NavLink to='home'>
            <li>Home</li>
            </NavLink>
           <NavLink to='products'>
           <li>Product</li>
           </NavLink>
            <NavLink to='addtoCart'>
            <li>Add to Cart</li>
            </NavLink>
            
        </ul>
    </div>
  )
}

export default Navbar