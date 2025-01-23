// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Header/Header'

const App = () => {
  return (

    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/Contact" element={<Contact />}  />
    </Routes>
    <Footer/>
    </>
  )
  }

  export default App;