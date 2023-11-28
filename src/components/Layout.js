
import React from 'react';
import '../App.css';
// import Header from './Header';
import SearchBar from './Searchbar';
import ProductList from './Productlist';
import Devices from './Devices'; 
import Footer from './Footer'; 
import logo from '../public/assets/logo.png'; 

function Layout() {
  return (
    <section className="layout">
      {/* <Header/> */}
     <header className="header">
       <div className="header-logo">
         <img src={logo} alt="Logo" className="logo" />
          <nav>
             <h1>MARKET 𝓒ONNECT</h1>
            <ul>
              <a  href="#">Smartphones</a>|
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
     <SearchBar />
     <ProductList/>
     <Devices/>
     <Footer/>
    </section>
  );
}

export default Layout;
