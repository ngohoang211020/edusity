import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Tittle from './Components/Tittle/Tittle';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Tittle subTittle='Our PROGRAM' tittle='What We Offer' />
        <Programs />
        <About />
        <Tittle subTittle='Gallery' tittle='Campus Photos' />
        <Campus />
        <Tittle subTittle='TESTIMONIALS' tittle='What Student Says' />
        <Testimonials />
        <Tittle subTittle='Contact Us' tittle='Get in Touch' />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
