
import React from 'react';
import '../App.css';
import Header from './Header';
import SearchBar from './Searchbar';
import ProductList from './Productlist';
import Devices from './Devices';
import Browse from './Browse'; 
import Footer from './Footer'; 
import logo from '../public/assets/logo.png'; 

function Layout() {
  return (
    <section className="layout">
     <Header/>
     <SearchBar />
     <ProductList/>
     <Devices/>
     <Browse/>
     <Footer/>
    </section>
  );
}

export default Layout;
