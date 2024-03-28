import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart-icon.png'
import cart_icon_02 from '../Assets/cart-ixon-02.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const[menu,setMenu] = useState("Shop");

  return (
    <div class='navbar'>
      <div className="nav-logo">
        <p>MOOZ.</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none', color:'white'}} to='/'>Shop</Link></li>
        <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration:'none', color:'white'}} to='/men'>Men</Link></li>
        <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:'none', color:'white'}} to='/women'>Women</Link></li>
        <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none', color:'white'}} to='/kids'>Kids</Link></li>
        <li onClick={()=>{setMenu("Accessories")}}><Link style={{textDecoration:'none', color:'white'}} to='/kids'>Accessories</Link></li>
      </ul>
      <nav className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon_02} alt=""/></Link>
        <div className='nav-cart-count'>0</div>
      </nav>
    </div>
  )
}

export default Navbar
