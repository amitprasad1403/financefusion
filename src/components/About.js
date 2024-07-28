import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function About() {
    return (
        <>
            <Header />
            <div className="services_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="services_taital">WELCOME TO FINANCE FUSION</h1>
                            <p className="services_text">To create a trustworthy, transparent and highest integrity financial institution that positively advances the socio-economic well-being of lower middle class to middle class Indian households while protecting the interests of all stakeholders.</p>
                            {/* <div className="moremore_bt"><a href="#">Read More </a></div> */}
                        </div>
                        <div className="col-md-4">
                            <div><img src="assets/images/img-1.png" className="image_1" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
