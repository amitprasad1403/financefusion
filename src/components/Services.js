import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'

export default function Services() {

    const navigate = useNavigate();

    const handleClick = (value) => {
        // console.log(value) 
        localStorage.setItem('flag',value)
        console.log(localStorage.getItem('tocken'))
        if(localStorage.getItem('tocken')!=null){
            navigate('/apply')
        }else{
            navigate('/register')
        }
    }

    return (
        <>
            <Header />
            <div className="what_we_do_section layout_padding" style={{marginBottom:`60px`}}>
                <div className="container">
                    <h1 className="what_taital">WHAT WE DO</h1>
                    <p className="what_text">It is a long established fact that a reader will be distracted by the readable content of a </p>
                    <div className="what_we_do_section_2">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="box_main">
                                    <div className="icon_1"><img src="assets/images/personal-loan-1.png" className='img-icon' alt='image1' /></div>
                                    <h3 className="accounting_text">Personal Loan</h3>
                                    <p className="lorem_text">Just fill a few basic details and get an instant personal loan.</p>
                                    <div className="moremore_bt_1" onClick={()=>handleClick('Personal Loan')}><Link>Apply</Link></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="box_main-alternate">
                                    <div className="icon_1"><img src="assets/images/education-loan.png" className='img-icon' alt='image2' /></div>
                                    <h3 className="accounting_text">Education Loan</h3>
                                    <p className="lorem_text">Just fill a few basic details and get an instant eduacation loan.</p>
                                    <div className="moremore_bt_2" onClick={()=>handleClick('Education Loan')}><Link>Apply</Link></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="box_main">
                                    <div className="icon_1"><img src="assets/images/car-loan-1.png" className='img-icon' alt='image3' /></div>
                                    <h3 className="accounting_text">Car Loan</h3>
                                    <p className="lorem_text">Just fill a few basic details and get an instant car loan.</p>
                                    <div className="moremore_bt_1" onClick={()=>handleClick('Car Loan')}><Link>Apply</Link></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="box_main-alternate">
                                    <div className="icon_1"><img src="assets/images/icon-4.png" alt='image4' /></div>
                                    <h3 className="accounting_text">Financial Advisor</h3>
                                    <p className="lorem_text">Just fill a few basic details and get an instant financial advice.</p>
                                    <div className="moremore_bt_2" onClick={()=>handleClick('Finance Advisor')}><Link>Apply</Link></div>
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
