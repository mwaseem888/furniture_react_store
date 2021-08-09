
import React from 'react'

import { FaFacebook,FaYoutube,FaWhatsapp,FaPinterest,FaInstagram,FaTwitter,FaLinkedin, FaMap, FaMapPin, FaMapMarked, FaMapMarker, FaPhone, FaEnvelope } from "react-icons/fa";	
import "./footer.css"
function Footer() {
    return (
        <div>
    <section id="footer">
		<div className="container">
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col-xs-12 col-sm-3 col-md-3">
					<h5>Contact Us</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="#"><a href="#" className="fa"><FaMapMarker/></a> Street # 3, Gulistan Colony Ghazi chowk, Lahore Punjab,Pakistan</a></li>
						<li><a href="#"><a href="#" className="fa"><FaPhone/></a> 0333-4123009</a></li>
						<li><a href="#"><a href="#" className="fa"><FaWhatsapp/></a> 0300-4195264</a></li>
						<li><a href="#"><a href="#" className="fa"><FaEnvelope/></a> gulshansteel786@gmail.com</a></li>
						
					</ul>
				</div>
                <div className="col-xs-12 col-sm-3 col-md-3">
					<h5>Our Services</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>Iron Gate</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>Iron Door</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>Iron Railing</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>Iron Balcony</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>Safety Grill</a></li>
					</ul>
				</div>
				<div className="col-xs-12 col-sm-3 col-md-3">
					<h5>Online Shop</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>Table</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>Chair</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>Light</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>Brass Material</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>Decorative Piece</a></li>
					</ul>
				</div>
				<div className="col-xs-12 col-sm-3 col-md-3">
					<h5>Quick Links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>Help</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>Shipment Track</a></li>
						<li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>Order Status</a></li>
						<li><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i className="fa fa-angle-double-right"></i>Payment Method</a></li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-twitter"></i></a></li>
						<li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-instagram"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-pinterest"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-linkedin"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-youtube"></i></a></li>
						<li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" target="_blank"><i className="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr/>
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><u><a href="https://www.gulshansteel.com/">Gulshan steel Wrought Iron Works</a></u> is a Registered NTN/Chamber of Commerce, Our more showroom Faisalabad, Islamabad, Lahore.</p>
					<p className="h6"> &copy;{new Date().getFullYear()} All rights reserved | Terms Of Services | Privacy |<a className="text-green ml-2" href="https://www.gulshansteel.com" target="_blank">Gulshan Steel</a></p>
				</div>
				<hr/>
			</div>	
		</div>
	</section>
	</div>
    )
}

export default Footer

	
     