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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
          debitis, velit sed quos laborum pariatur vero necessitatibus
          cupiditate, quod beatae corporis sunt unde exercitationem perspiciatis
          ipsa facilis tenetur vel nostrum.
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
          debitis, velit sed quos laborum pariatur vero necessitatibus
          cupiditate, quod beatae corporis sunt unde exercitationem perspiciatis
          ipsa facilis tenetur vel nostrum.
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
          debitis, velit sed quos laborum pariatur vero necessitatibus
          cupiditate, quod beatae corporis sunt unde exercitationem perspiciatis
          ipsa facilis tenetur vel nostrum.
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
