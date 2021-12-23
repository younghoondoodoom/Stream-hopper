import React from 'react'
import navlogo from '../images/navlogo.png';
import { Link } from 'react-router-dom';

// 내비게이션 바
const NavBar = () => {
  return (
    <div className='NavBar'>
      <nav id="navbar" className="navbar navbar-dark bg-dark">
        <div className="container-fluid"> 
        <Link className="navbar-brand opacity-100" to="/">
          <img src={navlogo} alt="" width="30" height="24" />
      <span> </span>Stream Hopper</Link>

      
        <Link className="navbar-brand" to="/main">홈</Link>
    
      </div> 
    </nav>
    </div>
  )
}

export default NavBar
