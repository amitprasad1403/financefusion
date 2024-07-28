import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Team() {
    return (
        <>
            <Header />
            <div className="team_section layout_padding"  style={{marginBottom:`60px`}}>
                <div className="container">
                    <h1 className="what_taital">Our Team and experts</h1>
                    <p className="what_text_1">It is a long established fact that a reader will be distracted by the readable content of a </p>
                    <div className="team_section_2 layout_padding">
                        <div className="row">
                            <div className="col-sm-3">
                                <img src="assets/images/img-7.png" className="image_7" />
                                <p className="readable_text">Readable</p>
                                <p className="readable_text_1">Follow Us</p>
                                <div className="social_icon">
                                    <ul>
                                        <li><a href="#"><img src="assets/images/fb-icon.png" /></a></li>
                                        <li><a href="#"><img src="assets/images/twitter-icon.png" /></a></li>
                                        <li><a href="#"><img src="assets/images/linkedin-icon.png" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <img src="assets/images/img-8.png" className="image_7" />
                                <p className="readable_text">Content</p>
                                <p className="readable_text_1">Follow Us</p>
                                <div className="social_icon">
                                    <ul>
                                        <li><a href="#"><img src="assets/images/fb-icon.png" /></a></li>
                                        <li><a href="#"><img src="assets/images/twitter-icon.png" /></a></li>
                                        <li><a href="#"><img src="assets/images/linkedin-icon.png" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <img src="assets/images/img-9.png" className="image_7" />
                                <p className="readable_text">Readable</p>
                                <p className="readable_text_1">Follow Us</p>
                                <div className="social_icon">
                                    <ul>
                                        <li><a href="#"><img src="assets/images/fb-icon.png" /></a></li>
                                        <li><a href="#"><img src="assets/images/twitter-icon.png" /></a></li>
                                        <li><a href="#"><img src="assets/images/linkedin-icon.png" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <img src="assets/images/img-10.png" className="image_7" />
                                <p className="readable_text">Content</p>
                                <p className="readable_text_1">Follow Us</p>
                                <div className="social_icon">
                                    <ul>
                                        <li><a href="#"><img src="assets/images/fb-icon.png" /></a></li>
                                        <li><a href="#"><img src="assets/images/twitter-icon.png" /></a></li>
                                        <li><a href="#"><img src="assets/images/linkedin-icon.png" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
