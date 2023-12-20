
import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import HomeTop from './components/HomeTop';
import ContactLayout from './components/ContactLayaout';

function App() {
 
  return (
    <div className="App">
      <Router>
        <Header />
      <Navbar />
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/menu' element={<Layout><Menu /></Layout>} />
          <Route path='/Hometop' element={<Layout><HomeTop /></Layout>} />
          <Route path='/about' element={<Layout><About /></Layout>} />
          <Route path='/contact' element={<ContactLayout><Contact /></ContactLayout>} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
