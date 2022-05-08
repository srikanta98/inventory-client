import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
// 
// import banner2 from '../../../images/banner/banner2.jpg';

// import banner312 from '../../../images/banner/Untitled-3.jpg';

import banner31 from '../../../images/banner/final1.jpg';
import banner312 from '../../../images/banner/final-2.jpg';
import banner3121 from '../../../images/banner/final-3.jpg';
import banner31211 from '../../../images/banner/final-4.jpg';
import banner312111 from '../../../images/banner/final5.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Banner = () => {
    useEffect( ()=>{
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease',
        })
    });
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} data-aos='zoom-out'>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={banner31}
                    alt="First slide"
                />
               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner312111}
                    alt="Second slide"
                />

             
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner31211}
                    alt="Third slide"
                />

              
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;