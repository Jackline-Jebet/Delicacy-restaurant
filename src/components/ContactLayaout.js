import React from 'react';
import Header from '../components/Header';
import ScrollTopArrow from '../components/ScrollTopArrow';
// import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <ScrollTopArrow />
    </div>
  );
};

export default Layout;