// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Header/Header'
import Login from './Pages/Auth/Login';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      </BrowserRouter>
      <Footer/>
      <ToastContainer position='top-right' theme="colored" />
    </>
  )
}

export default App