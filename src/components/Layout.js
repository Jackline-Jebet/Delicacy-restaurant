import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HomeTop from './HomeTop';
import ScrollTopArrow from '../components/ScrollTopArrow';
// import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Navbar />
      <HomeTop />
      {children}
      <ScrollTopArrow />
    </div>
  );
};

export default Layout;