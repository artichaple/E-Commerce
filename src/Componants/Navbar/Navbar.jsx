import React from 'react'
import { Link, Links } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
   
    <div className='navbar'>
    <Link className="navbar-logo"><h2>Shop.co</h2></Link>
      <ul className='navbar-link'>
   <li><Link to ="/">Home</Link></li>
   <li><Link to ="/onsale" >On Sale</Link></li>
   <li><Link to ="/newarrivals" >New Arrivals</Link></li>
   <li><Link to ="/brands" >Brands</Link></li>
    </ul>
    <div>
    <input type='text' placeholder='Search for products...' className='searchbox'/>
  </div>
  </div>

    </>

  )
}

export default Navbar