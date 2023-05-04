import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCard from '../Cards/ImageCard';
import './CardSlider.css'

const CardSlider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1
      };

  return (
    <div className='mb-5 mt-5 card-slider'>
      <Slider {...settings}>
      <div>
        <ImageCard/>
      </div>
      <div>
        <ImageCard/>
      </div>
      <div>
        <ImageCard/>
      </div>
      <div>
        <ImageCard/>
      </div>
      <div>
        <ImageCard/>
      </div>
      <div>
        <ImageCard/>
      </div>
      <div>
        <ImageCard/>
      </div>
    </Slider>
    </div>
  )
}

export default CardSlider
