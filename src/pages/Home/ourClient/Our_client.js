import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './our_client.css'
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
      
    };
    return (
      <div>
         <h1 style={{textAlign:"center",marginTop:"30px", fontSize:"45px"}}>Our Client</h1>
        <Slider style={{marginTop:"30px",marginBottom:"30px",}} {...settings}>
        
          <div>
            <img src="/images/c1.png" style={{width:"150px", height:"150px"}}/>
          </div>
          <div>
            <img src="/images/c2.png" style={{width:"150px", height:"150px"}}/>
          </div>
          <div>
            <img src="/images/c3.jpg" style={{width:"150px", height:"150px"}}/>
          </div>
          <div>
            <img src="/images/c4.png" style={{width:"150px", height:"150px"}}/>
          </div>
          <div>
            <img src="/images/c5.png" style={{width:"150px", height:"150px"}}/>
          </div>
          <div>
            <img src="/images/c6.jpg" style={{width:"150px", height:"150px"}}/>
          </div>
          <div>
            <img src="/images/c7.jpg" style={{width:"150px", height:"150px"}}/>
          </div>
          <div>
            <img src="/images/c8.png" style={{width:"150px", height:"150px"}}/>
          </div>
          <div>
            <img src="/images/c9.png" style={{width:"150px", height:"150px"}}/>
          </div>
          <div>
            <img src="/images/c10.jpg" style={{width:"150px", height:"150px"}}/>
          </div>
          <div>
            <img src="/images/c11.png" style={{width:"150px", height:"150px"}}/>
          </div>
          
          <div>
            <img src="/images/c13.jpg" style={{width:"150px", height:"150px"}}/>
          </div>
          <div>
            <img src="/images/c14.jpg" style={{width:"150px", height:"150px"}}/>
          </div>
          
         
        </Slider>
      </div>
    );
  }
}

            
          