import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [openMenu, setOpenMenu] = useState(false);

  const stylePeer = {
    top: openMenu ? "65px" : "-400px",
  }

  return (
    <div className="header">
      <div className="mobile_nav">
        {/* <Link href="/"><div className="nav_logo">
          <img src="./images/logos.svg" alt="" />
        </div></Link> */}
        <Link href="/"><div className="nav_logo test_logo">
          <img src="./images/logo11.png" alt="" />
        </div></Link>
        <div className="icon_mob" onClick={() => setOpenMenu(!openMenu)}>
          <img src="./images/menu.png" alt="" />
        </div>
      </div>
      <nav style={stylePeer} className="navbar">
        <Link href="/"><div className="nav_logo">
          {/* <img src="./images/logos.svg" alt="" /> */}
          <img className='test_logo' src="./images/logo11.png" alt="" />
        </div></Link>
        <div className="nav_content">
          <ul>
            <li><Link style={{ backgroundColor: currentRoute === '/' ? "#3464FD" : "", color: currentRoute === '/' ? "white" : "#101729" }} href="/">Home</Link></li>
            <li className='sty'><a href="#!">Services</a>
              <div className='service_inner'>
                <ul>
                  <li><Link style={{ backgroundColor: currentRoute === '/sellside' ? "#3464FD" : "", color: currentRoute === '/sellside' ? "white" : "#101729" }} href="/sellside">Sell-Side Advisory</Link></li>
                  <li><Link style={{ backgroundColor: currentRoute === '/buyside' ? "#3464FD" : "", color: currentRoute === '/buyside' ? "white" : "#101729" }} href="/buyside">Buy-Side Advisory</Link></li>
                  <li><Link style={{ backgroundColor: currentRoute === '/raisingCapital' ? "#3464FD" : "", color: currentRoute === '/raisingCapital' ? "white" : "#101729" }} href="/raisingCapital">Raising Capital</Link></li>
                </ul>
              </div>
            </li>
            <li><Link style={{ backgroundColor: currentRoute === '/about' ? "#3464FD" : "", color: currentRoute === '/about' ? "white" : "#101729" }} href="/about">About Us</Link></li>
            <Link href="/contact"><li>
              <button style={{ backgroundColor: currentRoute === '/contact' ? "#3464FD" : "", color: currentRoute === '/contact' ? "white" : "#3464FD" }}>Contact Us</button>
            </li></Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
