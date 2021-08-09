import React from 'react'
import {
    Grid,
} from "@material-ui/core";

export default function CompanyAbout() {
    return (
        
        <div>
            <div className="container">
             <div className="heading">About Us</div>
             <hr/>
            <Grid container spacing={5}>
            <Grid item lg={6} xs={12}>
              <p>
     <strong>HISTORY</strong> – Gulshan steel was founded in 2010 with a vision to provide world-class hand crafted ironwork supported by the latest

design technologies. In 2017,<strong>GULSHAN STEEL DÉCOR SYSTEM</strong>  continued it's growth by combining resources with JG Forge and their 40-year custom ironwork history.

Our team of blacksmiths are the best in the world at crafting showcase ironwork. We work with many top architects and builders in PAKISTAN and around the ISL..<br/>

<strong>BLACKSMITHS</strong> - All of our ironwork is hand crafted by our team of ironwork artisans, many of whom are 2nd and 3rd generation blacksmiths. Each artist has specific skills and techniques that have been fine tuned over decades.
  special Our team wrought iron work ship out class worker of experience… <br/> 

<strong>TECHNOLOGY</strong> - Our architects and designers use the latest software platforms to create beautiful and accurate AutoCAD drawings for each project.
GULSHAN STEEL IRON WORK - This powerful combination of history, experinced artisans and design technology allow us to create the most unique and one of a kind ironwork. Whether your project is   a few simple doors for a remodel, or an elaborate grand staircase for your estate, we will bring your   vision   to reality.

              </p>
              </Grid>
              <Grid item lg={6} xs={12}>
                  <img src="/images/bed4.jpg"/>
              </Grid>
            </Grid>
            </div>
            </div>
       
    )
}
