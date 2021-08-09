import React from 'react'
import {
    Container,
    Grid,
    TextField,
    TextareaAutosize,
    Button
} from "@material-ui/core";
import styled from 'styled-components'
export default function OurValue() {
    return (
        
            <div>
            <div>
            
            <h1 style={{textAlign:"center"}}>WHAT MAKES US UNIQUE</h1>
            <p style={{textAlign:"center"}}>We are committed to provide what we say</p>
          
            
            
            
            </div>
            <div className="container">
            
            <Grid container spacing={5}>
            <Grid item lg={6} xs={12}>
                 <img style={{marginTop:"30px",marginBottom:"30px", width:"550px", height:"350px"}} src="/images/bed4.jpg"/>
              </Grid>
              <Grid item lg={6} xs={12}>
              <h2 style={{marginTop:"30px"}}>OUR VALUES</h2>
            <ul  style={{listStyleType:"circle",marginTop:"10px",fontSize:"18px",lineHeight:"35px"}}>
                <li>Belief in the virtues of integrity & hard work </li>
                <li>Relentless in the pursuit of quality and excellence.</li>
                <li>Honor our promises and contracts.</li>
                <li>Belief in open & honest communications.</li>
                <li>Actively support our professions.</li>
                <li>Personally invest in our communities.</li>
                <li>Actively support our professions.</li>
                <li>Honor our promises and contracts.</li>
            </ul>
              </Grid>
              
            </Grid>
                   
             
        </div>
      </div>
        
    )
}

