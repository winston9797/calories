import React from 'react'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <div>
    <nav className='red lighten-1'>
        <div className="container">
          <div className="nav-wrapper">
              <a href="#" className="brand-logo">Calorie Pal</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/recipes">Recipes</Link></li>
              <li><Link to="/about">About</Link></li>
          </ul>
          </div>
        </div>
    </nav>

    </div>
  )
}
