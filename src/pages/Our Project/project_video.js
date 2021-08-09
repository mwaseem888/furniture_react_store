import React from 'react'
import "./our_project.css"
import VideosDb from "../../data/Video_db"
import ReactPlayer from "react-player"
function ProjectVideo() {
    return (
        <div>
        <div className="container">
        <div className="heading">Our Project Videos</div>
        <hr/>
        </div>
        <div className="video-container">
          
        {VideosDb.map(pic =>
        
        <video  className="videos" width="320" height="240" src={pic.VideoSrc} type="video/mp4" controls/>
        
                      )}
             
             
            
        </div>
           
        
       </div> 
    )
}

export default ProjectVideo
