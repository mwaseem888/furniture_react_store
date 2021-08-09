import React from 'react'
import Header from '../Navbar/header';

import OurClient from './ourClient/Our_client';
import OurValue from './our_value';
import RecentWork from './Recentwork/recent_work'


import Slider from './slider_components';
import ServicesType from './type_services';
export default function Home() {
    return (
        <div>
           <Header/>
           <Slider/>
           
            <ServicesType/>
            <RecentWork/>
            <OurValue/>
            <OurClient/>
            
        </div>
    )
}
