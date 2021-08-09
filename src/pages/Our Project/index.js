import React from 'react'
import Header from '../Navbar/header';
import { Catalogue } from './cateloge';
import GalleryProject from './gallery';


import NearestProject from './nearby_project';
import ProjectVideo from './project_video';

export default function Project() {
    return (
        <div>
          <Header/>
          <GalleryProject/>
          <ProjectVideo/>
          <Catalogue/>
          <NearestProject/>
        </div>
    )
}
