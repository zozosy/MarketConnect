
import React from 'react';
import '../App.css';
import Header from './Header';
import SearchBar from './Searchbar';
import Devices from './Devices';
import Browse from './Browse'; 
import Footer from './Footer'; 

function Layout() {
  return (
    <section className="layout">
     <Header/>
     <SearchBar />
     <Devices/>
     <Browse/>
     <Footer/>
    </section>
  );
}

export default Layout;
