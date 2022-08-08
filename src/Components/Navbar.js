import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
        <ul className='parentlist'>
            <div className='list'><li>snap</li></div>
            <li>Features</li>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
        </ul>
    </div>
  )
}

export default Navbar