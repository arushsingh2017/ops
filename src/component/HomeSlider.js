import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


let slider_info = [

    {
        slider_bg: '/images/home-slider/slider1.webp',
        slider_title: 'Empowering the technology teams with right outcomes',
        slider_description: 'Experts in making application delivery lean, nimble, secured and highly productive since 2014.',
        slider_link: ''
    },
    {

        slider_bg: '/images/home-slider/slider2.webp',
        slider_title: 'Software application delivery just got 10x faster & cheaper',
        slider_description: 'A platform that will accelerate the velocity & reliability of tech startups.',
        slider_link: 'https://www.buildpiper.io/'
    },
    {
        slider_bg: '/images/home-slider/slider3.webp',
        slider_title: 'We believe in knowledge sharing & thought leadership',
        slider_description: 'Recognized by experts and loved by the industry. Leverage our open source utilities, technology blogs and much more...',
        slider_link: 'https://blog.opstree.com/'
    },
    {
        slider_bg: '/images/home-slider/slider4.webp',
        slider_title: 'Unicorns trust us for their DevSecOps journey',
        slider_description: 'With a deep understanding of Enterprise and startup needs, we have proven expertise and the ability to work across the spectrum.',
        slider_link: 'https://blog.opstree.com/'
    },
    {
        slider_bg: '/images/home-slider/slider5.webp',
        slider_title: 'It always feels good to be recognised for the work',
        slider_description: 'Appreciations & recognitions are what keep us motivated to go forward with vigour in our quest of creating tech empowered world.',
        slider_link: 'https://blog.opstree.com/'
    }

]

export default function HomeSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: true,
       
    };

    return (
        <>
            <Slider {...settings}>{
                slider_info.map((slid) =>
                    <>
                        <div className='slider-bg' style={{ height: '600px', marginTop:'0px', backgroundImage: `url("${slid.slider_bg}")` }}>
                            <div className='slider-inner-wrap'>
                                <h1>{slid.slider_title}</h1>
                                <h6>{slid.slider_description}</h6>
                                <div className='link-btn'>Know More</div>
                            </div>
                        </div>
                    </>
                )}
            </Slider>
        </>
        
    )
}
