import React from 'react'
import {
   Grid
} from "@material-ui/core";
import './recent_work.css'
function RecentWork() {
    return (
        <div>
            
           <div className="hd">
            <h1 style={{textAlign:"center",marginTop:"30px",}}>Our Recent Works May Impress You</h1>
             <p style={{textAlign:"center",}}>Who are in extremely love with eco friendly system.</p>
           </div>
           <Grid className="grid-body">
            <Grid className="grid-section">
                <div className="grid">
                  <div className="grid-img">
                      <img src="/images/Light5.jpg"/>
                  </div>
                  
                </div> 
                <div className="grid">
                  <div className="grid-img">
                      <img src="/images/Light4.jpg"/>
                  </div>
                  
                </div> 
                <div className="grid">
                  <div className="grid-img">
                      <img src="/images/Light3.jpg"/>
                  </div>
                  
                </div> 
                <div className="grid">
                  <div className="grid-img">
                      <img src="/images/Light2.jpg"/>
                  </div>
                  
                </div> 
                <div className="grid">
                  <div className="grid-img">
                      <img src="/images/Light1.jpg"/>
                  </div>
                  
                </div> 
                <div className="grid">
                  <div className="grid-img">
                      <img src="/images/Bed2.jpg"/>
                  </div>
                  
                </div> 
                <div className="grid">
                  <div className="grid-img">
                      <img src="/images/Bed1.jpg"/>
                  </div>
                  
                </div> 
                <div className="grid">
                  <div className="grid-img">
                      <img src="/images/Bed1.jpg"/>
                  </div>
                  
                </div> 
            </Grid>
            </Grid>
        </div>
    )
}

export default RecentWork;
