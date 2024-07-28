import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="footer_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <h4 className="about_text">About Us</h4>
                            <p className="dolor_text">Finance Fusion is dedicated to empowering individuals through smart financial solutions. From education and personal loans to expert financial advice, we're committed to helping you achieve your goals with confidence.</p>
                        </div> 
                        <div className="col-lg-4 col-sm-6">
                            <h4 className="about_text">Company</h4>
                            <div className="location_text"><span className="padding_left_15"><Link to="/services" style={{fontSize:`18px`,color:`#ffffff`}}>Services</Link></span></div>
                            <div className="location_text"><span className="padding_left_15"><Link to="/about" style={{fontSize:`18px`,color:`#ffffff`}}>About Us</Link></span></div>
                            <div className="location_text"><span className="padding_left_15"><Link to="/contactus" style={{fontSize:`18px`,color:`#ffffff`}}>Contact Us</Link></span></div>
                        </div>                        
                        <div className="col-lg-4 col-sm-6">
                            <h4 className="about_text">Finance Fusion</h4>
                            <div className="location_text"><img src="assets/images/map-icon.png" /><span className="padding_left_15">Nashik, Maharashtra</span></div>
                            <div className="location_text"><img src="assets/images/call-icon.png" /><span className="padding_left_15">+91 9987584547</span></div>
                            <div className="location_text"><img src="assets/images/mail-icon.png" /><span className="padding_left_15">demo@gmail.com</span></div>
                        </div>
                        <div className="col-lg-3 col-sm-6 d-none">
                            <h4 className="about_text">Newsletter</h4>
                            <input type="text" className="mail_text" placeholder="Enter your email" name="Enter your email" />
                            <div className="subscribe_bt"><a href="#">Subscribe</a></div>
                            <div className="footer_social_icon">
                                <ul>
                                    <li><a href="#"><img src="assets/images/fb-icon1.png" /></a></li>
                                    <li><a href="#"><img src="assets/images/twitter-icon1.png" /></a></li>
                                    <li><a href="#"><img src="assets/images/linkedin-icon1.png" /></a></li>
                                    <li><a href="#"><img src="assets/images/youtub-icon1.png" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copyright_section">
                        <div className="copyright_text">Copyright 2019 All Right Reserved By <Link to="/">Finance Fusion</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}
