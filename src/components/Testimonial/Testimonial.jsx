import React from 'react'
import Slider from "react-slick";
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

function Testimonial() {
  return (
    <Slider>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
          elit. Culpa debitis, velit sed quos laborum pariatur 
          vero necessitatibus cupiditate, quod beatae corporis 
          sunt unde exercitationem 
          perspiciatis ipsa facilis tenetur vel nostrum.</p>
      </div>
    </Slider>
  )
}

export default Testimonial