import React from 'react'
import Header from '../Navbar/header';
import CompanyAbout from './company_about';
import LifeCycle from "./lifeCycle_company";
import OurBuilder from './our_builder';
import OurTeam from './our_team';
export default function About() {
    return (
        
        <div>
        <Header />
        <CompanyAbout/>
        
        <OurTeam/>
        <OurBuilder/>
        <LifeCycle/>
        
        
        </div>
       
    )
}
