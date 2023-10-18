import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

function ScrollerPart() {
    const navigate=useNavigate()
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const handleNavigate=()=>{
        navigate('/shoppage')
      }
  return (
    <div >
      <Slider {...settings} >
      <div>
        <img src="https://hospitania.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fslider%2Fslider-1.jpg&w=1920&q=75" alt="" onClick={handleNavigate} style={{cursor:"pointer"}} />
      </div>
      <div>
      <img src="https://hospitania.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fslider%2Fslider-2.jpg&w=1920&q=75" alt="" onClick={handleNavigate}/>
      </div>
      <div>
      <img src="https://hospitania.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fslider%2Fslider-3.jpg&w=1920&q=75" alt="" onClick={handleNavigate}/>
      </div>
      
    </Slider>
    </div>
  )
}

export default ScrollerPart;