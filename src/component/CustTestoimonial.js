import React from 'react'
import { Container } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const cust_testimonial = [
  {
    name: 'Saarthak Vats',
    title: 'VP Engineering, Noon Pay',
    dis: 'We are using their services for the last 2 years and it has been a wonderful experience working with them.'
  },
  {
    name: 'Junita Nidhindra',
    title: 'VP, Global Operations, Moterum',
    dis: 'They helped us set up the DevOps process & supported us in moving efficiently through the release cycles.'
  },
  {
    name: 'Ganesh N',
    title: 'Director - DevSecOps, ZestMoney',
    dis: 'The OpsTree team is super talented and has significantly contributed to the success of our DevOps and SRE teams.'
  },
]

export default function CustTestoimonial() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,

  };
  return (
    <>
      <Container className='pt-5 pb-5'>
        <Slider {...settings}>
        {
              cust_testimonial.map((item, index) =>                
                 <div className='box-wrap-testimonial'>
                   <h5>{item.name}</h5>
                   <h6>{item.title}</h6>
                   <p>{item.dis}</p>
                   </div>
              )
            }
        </Slider>
      </Container>
    </>
  )
}
