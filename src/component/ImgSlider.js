import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

function ImgSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
      return (
        <Slider className='slider pt-[15px] mx-[25px]' {...settings}>
          <div>
              <img  className="w-[100%] h-[100%] drop-shadow-lg" alt="M" src="/images/slider-badging.jpg"></img>
          </div>
          <div>
          <img  className="w-[100%] h-[100%] drop-shadow-lg" alt="M" src="/images/slider-badag.jpg"></img>
          </div>
          <div>
          <img  className="w-[100%] h-[100%] drop-shadow-lg" alt="M" src="/images/slider-scale.jpg"></img>
          </div>
          <div>
          <img  className="w-[100%] h-[100%] drop-shadow-lg" alt="M" src="/images/slider-scales.jpg"></img>
          </div>
        </Slider>
      );
}

export default ImgSlider



