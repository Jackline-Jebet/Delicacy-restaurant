import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HomeTop from './HomeTop';
// import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Navbar />
      <HomeTop />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;