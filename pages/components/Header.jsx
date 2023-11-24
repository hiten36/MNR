import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="nav_logo">
          <img src="./images/imgis.png" alt="" />
        </div>
        <div className="nav_content">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><a href="">Services</a></li>
            <li><a href="">About</a></li>
           <Link href="/contact"><li>
              <button>Contact us</button>
            </li></Link> 
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header