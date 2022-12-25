import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardMedia, ImageListItem } from '@mui/material';
import img from "./../../Images/hotel1.jpg"
import ImageContainer from './ImageContainer';
const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };
    
  return (
    <Slider {...settings}>
      <div>
      <ImageContainer Text={"More Hyatt offers"}/>
      </div>
      {/* <div>
      <ImageContainer/>
      </div>
      <div>
      <ImageContainer/>
      </div>
      <div>
      <ImageContainer/>
      </div>
      <div>
      <ImageContainer/>
      </div>
      <div>
      <ImageContainer/>
      </div> */}
    </Slider>

  )
}

export default ImageSlider