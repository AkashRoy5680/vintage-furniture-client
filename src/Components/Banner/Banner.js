import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from "../../images/Banner/banner1.jpg"
import banner2 from "../../images/Banner/banner2.jpg"
import banner3 from "../../images/Banner/banner3.jpg"

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img style={{width:"1400px", height:"500px"}}
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='text-dark'>Sofa</h3>
                    <p className='text-warning'>Comfortable indoor secure sofa.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{width:"px", height:"500px"}}
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-dark'>Cupboard</h3>
                    <p className='text-warning'>Sleep until one die.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{width:"1400px", height:"500px"}}
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-dark'>Bed</h3>
                    <p className='text-warning'>
                    Comfortable indoor secure Bed.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;