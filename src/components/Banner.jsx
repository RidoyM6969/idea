import React from 'react'
import baner from "../assets/baner.png"
import Slider from "react-slick"


const Banner = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    
        <Slider {...settings}>
      <div>
        <img src={baner} alt="" />
      </div>
      <div>
        <img src={baner} alt="" />
      </div>
      <div>
        <img src={baner} alt="" />
      </div>
    </Slider>
  )
}

export default Banner
