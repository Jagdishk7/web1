import React from 'react'
import './App.css';
import NavScroll from './components/navbar/NavScroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carouselcomp from './components/carousel/Carouselcomp';
import Footer from './components/footer/Footer';
import Category from './components/category/Category';
import CardSlider from './components/cardslider/CardSlider';


function App() {
  return (
    <>
    <NavScroll/>
    <Carouselcomp/>
    <div className='container'>
    <Category/>
    <hr/>
    <CardSlider/>
    <CardSlider/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
