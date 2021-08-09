import React from 'react'
import { Card } from '@material-ui/core';
import {Grid} from '@material-ui/core'
import { GiGate } from "react-icons/gi";

import styled from 'styled-components'

export default function ServicesType() {
    return (<div>
        <h1 style={{textAlign:"center",marginTop:"30px"}}>OUR SERVICES</h1>
<ServicesContainer className="Services_Container">
<Grid container spacing={5}>
    <div className="container" >
        <div className="card">
            <div className="box">
                <div className="content">
                    <h2>01</h2>
                    <div className="Icon_class"><GiGate/></div>
                    <h3>Main Gate</h3>
                    
                    <p>Our Company manufacture hand made Main Gate, Main Door, Single Door.This product prepare in Wrought iron, cast iron or laser cutting.</p>
                    <a href="#"> Read More</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="box">
                <div className="content">
                    <h2>02</h2>
                    <h3>Railing</h3>
                    <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal and a search for 'lorem ipsum' will uncover many web sites still in their infancy</p>
                    <a href="#"> Read More</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="box">
                <div className="content">
                    <h2>03</h2>
                    <h3>Furniture</h3>
                    <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal and a search for 'lorem ipsum' will uncover many web sites still in their infancy</p>
                    <a href="#"> Read More</a>
                </div>
            </div>
        </div>
    </div>
</Grid>
</ServicesContainer>
</div>

        /*<div className="container">
             <div className="row">
    <div className="col">
      <div class="card" style={{width: "20rem"}} >
  <img src="..." class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col">
      <div class="card" style={{width: "20rem"}} >
  <img src="..." class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
    </div>
    </div>
    <div className="col">
      <div class="card" style={{width: "20rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
    </div>
  </div>
</div>
</div>*/
    )
}
const ServicesContainer = styled.article ` 
.container
{display:flex;
justify-content:center;
text-align: center;
max-width: 1200px;
flex-wrap: wrap;
padding: 40px 0;
}
.container .card{
position: relative;
min-width: 320px;
height: 440px;
box-shadow: inset 5px 5px 5px rgba(0,0,0,0.05),
            inset -5px -5px 5px rgba(255,255,255,0.5),
            5px 5px 5px rgba(0,0,0,0.05),
            -5px -5px 5px rgba(255,255,255,0.5);
border-radius: 15px;
margin: 30px;
}
.container .card .box{
position: absolute;
top: 20px;
left: 20px;
right: 20px;
bottom: 20px;
background: #ebf5fc;
box-shadow: 0 10px 20px rgba(0,0,0,0.1) ;
border-radius: 15px; ;
display: flex;
justify-content: center;
align-items: center;
transition: 0.5s;
}
.container .card:hover .box {
    transform: translateY(-50px);
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    background:black;
    background:linear-gradient(45deg,#11201E,#34403F);
}
.container .card .box .content{
    padding:20px;
    text-align: center;

}
.container .card .box .content h2{
    position:absolute;
    top:-10px;
    right:30px;
    font-size:8em;
    color: rgba(0,0,0,0.02);
    transition:0.5s;
}
.container .card:hover .box .content h2{
    color: rgba(0,0,0,0.05);
}
.container .card .box .content h3{
    
    font-size:1.8em;
    color: #31352A;
    z-index:1;
    transition:0.5s;
}
.container .card .box .content p{
    
    font-size:1em;
    font-weight:300;
    color: #777;
    z-index:1;
    transition:0.5s;
}
.container .card:hover .box .content p,.container .card:hover .box .content h3{
    color:#fff;
}
.container .card .box .content a{
    position:relative;
    display:inline-block;
    padding:8px 20px;
    background: #34403F;
    margin-top:15px;
    border-radius:20px;
    color:#fff;
    text-decoration:none;
   font-weight:400;
   box-shadow:0 10px 20px rgba(0,0,0,0.2);
}
.container .card:hover .box .content a{
 background:#52D8D3;
 color:#000;
}
.Icon_class{
    font-size:80px;
}
.Icon_class div:hover{
    font-size:80px;
    color:#fff;
}
`
