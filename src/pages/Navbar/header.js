import { Facebook, faTimes, FormatListNumberedSharp } from "@material-ui/icons"
import { AppBar } from '@material-ui/core'
import React from 'react'
import {Link} from "react-router-dom"
import "./header.css"




export default function Header() {
   
  
    return (
       <div>
<nav>
   <div className="wrapper_menu">
      <div className="main_logo"><Link to="/">Gulshan Steel</Link></div>
      <input type="radio" name="slide" id="menu-btn"/>
      <input type="radio" name="slide" id="cancel-btn"/>
      <ul className="navbar_link_main">
      <label for="cancel-btn" className="btn cancel-btn"><i class="fas fa-times"></i></label>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/" className="desktop-item">Services</Link>
         <input type="checkbox" id="showDrop" />
         <label for="showDrop" className="mobile-item">Services</label>
         <ul className="drop_menu">
            <li><Link to="/">Main Gate</Link></li>
            <li><Link to="/">Main Door</Link></li>
            <li><Link to="/">Railing</Link></li>
            <li><Link to="/">Balcony</Link></li>
            <li><Link to="/">Safety Grill</Link></li>
            <li><Link to="/">Others</Link></li>
         </ul>
         </li>

         <li>
         <Link to="/collection">Furniture</Link>
         <div className="mega_box">
            <div className="mega_content">
               <div className="row">
                  <img src="/images/Bed5.jpg"/>
               </div>
            
            <div className="row">
            <header>Table</header>
            <ul className="menu_box_link">
            <li><Link href="#">Antique Table</Link></li>
            <li><Link href="#">Coffee Table</Link></li>
            <li><Link href="#">Console Table</Link></li>
            <li><Link href="#">Dining Table</Link></li>
            <li><Link href="#">Garden Table</Link></li>  
            <li><Link href="#">Side Table</Link></li>  
                  </ul>
               </div>
                <div className="row">
            <header>Table</header>
            <ul className="menu_box_link">
            <li><Link href="#">Antique Table</Link></li>
            <li><Link href="#">Coffee Table</Link></li>
            <li><Link href="#">Console Table</Link></li>
            <li><Link href="#">Dining Table</Link></li>
            <li><Link href="#">Garden Table</Link></li>  
            <li><Link href="#">Side Table</Link></li>  
                  </ul>
               </div>
               
               
               <div className="row">
            <header>Light</header>
            <ul className="menu_box_link">
            <li><Link href="#">Chandelier Light</Link></li>
            <li><Link href="#">Garden Light </Link></li>
            <li><Link href="#">Hanging Light</Link></li>
            <li><Link href="#">Pilar Light</Link></li>
            <li><Link href="#">Wall Light</Link></li>  
                  </ul>
               </div>
               <div className="row">
            <header>Chair</header>
            <ul className="menu_box_link">
            <li><Link href="#">Interior Chair</Link></li>
            <li><Link href="#">Exterior Chair</Link></li> 
                  </ul>
               </div>
               
               </div>
            </div>
        
         </li>
         <li><Link href="#">Our project</Link></li>
         <li><Link href="#">Contact us</Link></li>
         <li><Link href="#">About us</Link></li>
         
      </ul>
      <label for="menu-btn" className="btn menu-btn"><i class="fas fa-bars"></i></label>
   </div>
   
</nav>
       </div>
       /*
        <div>
        
        <AppBar position='static'>
        
         <nav className='NavbarItems'>
           <div className='Navbar_logo'><a href="/"><img src="/images/logo.png" style={{width:"50px", height:"50px"}}/></a></div>
           
           <ul className="Link_style" >
              <Link className="Nav_Link" to="/">Home</Link>
           <Link className="Nav_Link" to="/collection">Furniture</Link>
           <Link className="Nav_Link" to="/services">Services</Link>
           <Link className="Nav_Link" to="/ourProject">Our Project</Link>
           <Link className="Nav_Link" to="/about">About Us</Link>
           <Link className="Nav_Link" to="/contact">Contact Us</Link>
           </ul>
           <ul style={{display:"flex",textDecoration:"none",listStyle: "none",fontSize:"20px",lineHeight:"35px",transition: ".6s", color: "yellowgreen"}}>
              <li><a href="#" className="fa"><FaFacebook/></a></li> 
              <li><a href="#" className="fa"><FaInstagram/></a></li>
              <li><a href="#" className="fa"><FaTwitter/></a></li>
              <li><a href="#" className="fa"><FaLinkedin/></a></li>
              <li><a href="#" className="fa"><FaYoutube/></a></li>
              <li><a href="#" className="fa"><FaPinterest/></a></li>
              <li><a href="#" className="fa"><FaWhatsapp/></a></li>
           </ul>
         </nav>
           
 </AppBar>
 </div>
 */
 
    )
}
