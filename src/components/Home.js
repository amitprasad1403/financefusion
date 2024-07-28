import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import slogans from './slogan'
import { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Home() {

    const navigate = useNavigate(); 

    const [index, setIndex] = useState(0);
    const location = useLocation()
    var zindex = 0;

    const handleClick = (value) => {
        // console.log(value) 
        localStorage.setItem('flag', value)
        if(localStorage.getItem('tocken')!=null){
            navigate('/apply')
        }else{
            navigate('/register')
        }
    } 

    useEffect(() => { 

        const intervalId = setInterval(() => {
            zindex = zindex % slogans.length;
            //   setIndex((prevIndex) => (prevIndex + 1) % slogans.length);
            setIndex(zindex)
            zindex += 1;
        }, 5000);

        return () => clearInterval(intervalId);


    }, []);

    return (
        <>
            <Header />
            <div className="header_section">
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner_main">
                            <h1 className="banner_taital">{slogans[index].title}</h1>
                            <p className="banner_text">{slogans[index].slogan}</p>
                            <div className="btn_main">
                                <div className="more_bt"><a href="#services">Apply </a></div>
                                <div className="contact_bt"><Link to="/contactus">Contact Us</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 padding_0">
                        <div className="map-responsive">
                            <img src="assets/images/banner-img.png" className="banner_img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="services_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="services_taital">WELCOME TO FINANCE FUSION</h1>
                            <p className="services_text">To create a trustworthy, transparent and highest integrity financial institution that positively advances the socio-economic well-being of lower middle class to middle class Indian households while protecting the interests of all stakeholders.</p>
                            <div className="moremore_bt"><Link to="/about">Read More </Link></div>
                        </div>
                        <div className="col-md-4">
                            <div><img src="assets/images/img-1.png" className="image_1" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="what_we_do_section layout_padding pb-5" id="services">
                <div className="container">
                    <h1 className="what_taital">WHAT WE DO</h1>
                    <p className="what_text">Your Trusted Financial Partner </p>
                    <div className="what_we_do_section_2">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="box_main">
                                    <div className="icon_1"><img src="assets/images/personal-loan-1.png" className='img-icon' alt='image1' /></div>
                                    <h3 className="accounting_text">Personal Loan</h3>
                                    <p className="lorem_text">Just fill a few basic details and get an instant personal loan.</p>
                                    <div className="moremore_bt_1" onClick={() => handleClick('Personal Loan')}><Link>Apply</Link></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="box_main-alternate">
                                    <div className="icon_1"><img src="assets/images/education-loan.png" className='img-icon' alt='image2' /></div>
                                    <h3 className="accounting_text">Education Loan</h3>
                                    <p className="lorem_text">Just fill a few basic details and get an instant eduacation loan.</p>
                                    <div className="moremore_bt_2" onClick={() => handleClick('Education Loan')}><Link>Apply</Link></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="box_main">
                                    <div className="icon_1"><img src="assets/images/car-loan-1.png" className='img-icon' alt='image3' /></div>
                                    <h3 className="accounting_text">Car Loan</h3>
                                    <p className="lorem_text">Just fill a few basic details and get an instant car loan.</p>
                                    <div className="moremore_bt_1" onClick={() => handleClick('Car Loan')}><Link>Apply</Link></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="box_main-alternate">
                                    <div className="icon_1"><img src="assets/images/icon-4.png" alt='image4' /></div>
                                    <h3 className="accounting_text">Financial Advisor</h3>
                                    <p className="lorem_text">Just fill a few basic details and get an instant financial advice.</p>
                                    <div className="moremore_bt_2" onClick={() => handleClick('Finance Advisor')}><Link>Apply</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project_section layout_padding d-none">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="project_main">
                                <h1 className="services_taital">Our projects</h1>
                                <p className="services_text">It is a long established fact that a reader will be distracted by the readable content of a </p>
                                <div className="moremore_bt"><a href="#">Read More </a></div>
                                <div className="image_6"><img src="assets/images/img-6.png" /></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="images_main">
                                <div className="images_left">
                                    <div className="container_1">
                                        <img src="assets/images/img-2.png" alt="Avatar" className="image" style={{ width: `100%` }} />
                                        <div className="middle">
                                            <div className="text"><img src="assets/images/search-icon.png" /></div>
                                            <h2 className="fact_text">Established Fact</h2>
                                        </div>
                                    </div>
                                    <div className="container_1">
                                        <img src="assets/images/img-3.png" alt="Avatar" className="image" style={{ width: `100%` }} />
                                        <div className="middle">
                                            <div className="text"><img src="assets/images/search-icon.png" /></div>
                                            <h2 className="fact_text">Established Fact</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="images_right">
                                    <div className="container_1">
                                        <img src="assets/images/img-4.png" alt="Avatar" className="image" style={{ width: `100%` }} />
                                        <div className="middle">
                                            <div className="text"><img src="assets/images/search-icon.png" /></div>
                                            <h2 className="fact_text">Established Fact</h2>
                                        </div>
                                    </div>
                                    <div className="container_1">
                                        <img src="assets/images/img-5.png" alt="Avatar" className="image" style={{ width: `100%` }} />
                                        <div className="middle">
                                            <div className="text"><img src="assets/images/search-icon.png" /></div>
                                            <h2 className="fact_text">Established Fact</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project_section_2 layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="icon_1"><img src="assets/images/icon-3.png" /></div>
                            <h3 className="accounting_text_1">1000+</h3>
                            <p className="yers_text">Borrowers</p>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="icon_1"><img src="assets/images/icon-4.png" /></div>
                            <h3 className="accounting_text_1">20000+</h3>
                            <p className="yers_text">Loans Disbursed</p>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="icon_1"><img src="assets/images/icon-2.png" /></div>
                            <h3 className="accounting_text_1">10000+</h3>
                            <p className="yers_text">Digital Merchants Financed</p>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="icon_1"><img src="assets/images/icon-1.png" /></div>
                            <h3 className="accounting_text_1">1500+</h3>
                            <p className="yers_text">Students Financed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team_section layout_padding d-none">
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
            <div className="client_section layout_padding">
                <div className="container">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <h1 className="what_taital">what is syas our clients</h1>
                                <div className="client_section_2 layout_padding">
                                    <ul>
                                        <li><img src="assets/images/round-1.png" className="round_1" /></li>
                                        <li><img src="assets/images/img-9.png" className="img-customer" /></li>
                                        <li><img src="assets/images/round-2.png" className="round_2" /></li>
                                    </ul>
                                    <p className="dummy_text">I have always been passionate about studying abroad, but since my income was a question of concern, I didn't get the expected support from any financial institutions until I came across InCred's Education Loan and reached out to them. The assistance I got from InCred's team made me feel, valued, and here I am, excelling in my career in Computer Science at Rivier University in the USA.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <h1 className="what_taital">what is syas our clients</h1>
                                <div className="client_section_2 layout_padding">
                                    <ul>
                                        <li><img src="assets/images/round-1.png" className="round_1" /></li>
                                        <li><img src="assets/images/img-8.png" className="img-customer" /></li>
                                        <li><img src="assets/images/round-2.png" className="round_2" /></li>
                                    </ul>
                                    <p className="dummy_text">In 2021, I was searching for funding to expand my business. During my quest, I learned about InCred Finance and contacted them to discuss my loan needs. The staff was very supportive and disbursed the amount in no time. I am thoroughly satisfied with the customer service as I received assistance throughout my loan tenure and received prompt responses to all of my queries.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <h1 className="what_taital">what is syas our clients</h1>
                                <div className="client_section_2 layout_padding">
                                    <ul>
                                        <li><img src="assets/images/round-1.png" className="round_1" /></li>
                                        <li><img src="assets/images/img-7.png" className="img-customer" /></li>
                                        <li><img src="assets/images/round-2.png" className="round_2" /></li>
                                    </ul>
                                    <p className="dummy_text">The customer service provided by the team was a big value add. A special mention for the fast processing of the loan which was very important for me.</p>
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
