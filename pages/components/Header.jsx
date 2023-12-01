import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/ro;uter';

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className="header">
      <nav className="navbar">
        <Link href="/"><div className="nav_logo">
          <img src="./images/ima.svg" alt="" />
        </div></Link>
        <div className="nav_content">
          <ul>
            <li><Link style={{backgroundColor:currentRoute === '/' ? "#3464FD" : "",color:currentRoute === '/' ? "white" : "#101729"}} href="/">Home</Link></li>
            <li className='sty'><a href="#!">Services</a>
              <div className='service_inner'>
                <ul>
                  <li><Link style={{backgroundColor:currentRoute === '/sellside' ? "#3464FD" : "",color:currentRoute === '/sellside' ? "white" : "#101729"}} href="/sellside">Sell-Side Advisory</Link></li>
                  <li><Link style={{backgroundColor:currentRoute === '/buyside' ? "#3464FD" : "",color:currentRoute === '/buyside' ? "white" : "#101729"}} href="/buyside">Buy-Side Advisory</Link></li>
                  <li><Link style={{backgroundColor:currentRoute === '/raisingCapital' ? "#3464FD" : "",color:currentRoute === '/raisingCapital' ? "white" : "#101729"}} href="/raisingCapital">Raising Capital</Link></li>
                </ul>
              </div>
            </li>
            <li><Link style={{backgroundColor:currentRoute === '/about' ? "#3464FD" : "",color:currentRoute === '/about' ? "white" : "#101729"}} href="/about">About</Link></li>
            <Link href="/contact"><li>
              <button style={{backgroundColor:currentRoute === '/contact' ? "#3464FD" : "",color:currentRoute === '/contact' ? "white" : "#3464FD"}}>Contact us</button>
            </li></Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
