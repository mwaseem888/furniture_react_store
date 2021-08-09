import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Home/ourClient/our_client.css'
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
         <div className="container">
             <div className="heading">Our Builder & Engineer</div>
              <hr/>
          </div>
        <Slider style={{marginTop:"30px",marginBottom:"30px",}} {...settings}>
        
          <div>
            <img src="/images/eng1.png" />
            <div style={{fontWeight:"bold",textAlign:"center",marginTop:"8px"}}>Mr khawer </div>
            <div style={{textAlign:"center",marginTop:"5px"}}>Habib  Builders</div>
          </div>
          <div>
            <img src="/images/eng2.png" />
            <div style={{fontWeight:"bold",textAlign:"center",marginTop:"8px"}}>Mr Mustafa Naeem   </div>
            <div  style={{textAlign:"center",marginTop:"5px"}}>Interior Designer</div>
          </div>
          <div>
            <img src="/images/eng3.jpg" />
            <div style={{fontWeight:"bold",textAlign:"center",marginTop:"8px"}}>Mr. Ghayyoor Obaid </div>
            <div  style={{textAlign:"center",marginTop:"5px"}}>Architects</div>
          </div>
          <div>
            <img src="/images/eng4.jpg" />
            <div style={{fontWeight:"bold",textAlign:"center",marginTop:"8px"}}>MR. MUJIB RAHIM KHAN   </div>
            <div  style={{textAlign:"center",marginTop:"5px"}}>  Architects ICON</div>
          </div>
          <div>
            <img src="/images/eng5.jpg" />
            <div style={{fontWeight:"bold",textAlign:"center",marginTop:"8px"}}>MR. SHAHID KHAN </div>
            <div  style={{textAlign:"center",marginTop:"5px"}}>ICON Architects</div>
          </div>
          <div>
            <img src="/images/eng6.png" />
            <div style={{fontWeight:"bold",textAlign:"center",marginTop:"8px"}}>Mr. Shoaib Malik </div>
            <div  style={{textAlign:"center",marginTop:"5px"}}> Architects</div>
          </div>
         
          
         
        </Slider>
      </div>
    );
  }
}

            
          



