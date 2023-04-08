import React from 'react'
import { Link }
 from "react-router-dom";

const Nav = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><img src="Image/logo.jfif" alt="first" /></li>
        <li><Link to="/"><img src="Image/cong.png" alt="name" /></Link></li>
        <li><img src="Image/gaj.jpeg" alt="name" />
          <ul className='dropdown'>
            <li><Link to="/gaj"><img src="Image/left.webp" alt="name" /></Link></li>
            <li><Link to="/second"><img src="Image/right.webp" alt="name" /></Link></li>
          </ul>

        </li>
        <li><img src="Image/search.jfif" alt="name" /></li>
      </ul>

    </div>
  )
}

export default Nav
