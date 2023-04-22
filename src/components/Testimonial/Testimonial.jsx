import React from "react";
import './Testimonial.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

function Testimonial() {
  const setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    swipeToSlide: true,
    slideToShow: 3,

    Responsive: [
      {
        breakpoint: 992,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slideToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...setting}>
      <div className="testimonial">
        <p>
        We are back from Peru and wanted to send you a sincere thank you
         for helping us organize our trip.  
         It was indeed the trip of a lifetime and we are so 
         grateful and appreciative of the work you did to help make it so magical.  
        </p>

        <div className=" description">
          <img src={ava01} alt="" />
          <div>
            <h6 className="mb-0 mt-3">Mark Albert</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <p>
        Just home from the wonderful trip you recommended 
        to Australia with Linda SIm and David Tarrant. 
        Not only was the trip mind blowing in it’s 
        selection of gardens, hotels, meals ....oh the meals
        !...but the group was collaborative and most
         interesting being mainly from areas close to us
        </p>
        <div className="description">
          <img src={ava02} alt="" />
          <div>
            <h6 className="mb-0 mt-3">MAry Jane</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <p>
        I am so thankful you guys are my travel agents as 
        I am to overwhelmed with everything else to shop 
        for airplane tickets. You know you are much more 
        than travel people. You are my friends, and that
         means a great deal to me.
        </p>
        <div className="description">
          <img src={ava03} alt="" />
          <div>
            <h6 className="mb-0 mt-3">Tom Hankins</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default Testimonial;
