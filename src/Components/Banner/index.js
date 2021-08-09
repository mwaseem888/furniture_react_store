import React, { Component } from "react";
import Slider from "react-slick";
import Container from "@material-ui/core/Container";
import './banner.css'

let images = [
  '/images/ns1.jpg',
  '/images/ns2.jpg',
  '/images/ns3.jpg',
]

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  autplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnDotsHover: true,
  fade: true,
  className: 'slides'
}

export function Banner() {
    return (
        <Container>
            <Slider style={{ margin: '20px 0px 40px 0px' }} {...settings}>
                {
                    images.map(image => (
                        <div>
                            <img style={{ width: '100%' }} src={image} alt="" />
                        </div>
                    ))
                }
            </Slider>
        </Container>
    )
}

