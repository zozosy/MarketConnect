import React from 'react';
import '../App.css';
import logo from '../../public/assets/logo.png';



function Header() {
  return (
    <section className="layout">
    
    <header className="header">
    <div className="header-logo">
     <img src={logo} alt="Logo" className="logo" />
  
     <nav>
       <h1>MARKET 𝓒ONNECT</h1>
     <ul>
     |<a  href="#">Smartphones</a>|
      <a  href="#">Cameras</a>|
      <a  href="#">Laptop</a>|
      <a  href="#">Other</a>|
      </ul>
    </nav>
    </div>
    <div className="sign-up">
      <p>Login/Sign-up</p>
      <img src="/assets/shop.jpg" alt="Shop Icon" className="shop-icon" />
    </div>
    </header>
    </section>
  );
}

export default Header;
