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
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">About</a></li>
            <li>
              <button>Contact us</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header