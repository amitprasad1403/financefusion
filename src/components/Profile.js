import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Profile() {

    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState();
    const [enquiryCount, setEnquiryCount] = useState();
    const [pendingEnquiryCount, setPendingEnquiryCount] = useState();

    const handleApplicationTracking = (value) => {
        localStorage.setItem('tracking_flag',value)
    }

    useEffect(() => {

        if (localStorage.getItem('tocken') != null) {
            navigate('')
        }

        const userData = async () => {
            let customer_id = localStorage.getItem('customer_id')
            const response = await fetch(`http://localhost:5000/api/customer/details/${customer_id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const json = await response.json()
            console.log(json)
            if (json.success) {
                setUserDetails(json.data)
            } else {
                console.log(json.message)
            }
        }

        const dashboardCount = async () => {
            let customer_id = localStorage.getItem('customer_id')
            const response = await fetch(`http://localhost:5000/api/customer/dashboardCount/${customer_id}`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const data = await response.json()
            console.log(data)
            if(data.success){
                console.log("Count data found succesfully.")
                setEnquiryCount(data.enquiryCount)
                setPendingEnquiryCount(data.pendingEnq)
            }else{
                console.log("Failed to get count")
            }
        }

        userData()
        dashboardCount()

    }, [])

    return (
        <>
            <Header />
            <div className="contact_section layout_padding">
                <div className="container-fluid">
                    <h1 className="what_taital">Welcome {userDetails?.first_name}</h1>
                    <div className="contact_section2">
                        <div className="container" style={{ cursor: `pointer` }}>
                            <h1 className="my-4">Dashboard</h1>
                            <div className="row">
                                <div className="col-md-4" onClick={()=>handleApplicationTracking('enquiries')}>
                                    <Link to="/applications">
                                    <div className="dashboard-card bg-light">
                                        <h3>Enquiries Added</h3>
                                        <p id="enquiries-count">{enquiryCount}</p>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-md-4" onClick={()=>handleApplicationTracking('approved')}>
                                    <Link to="/applications">
                                    <div className="dashboard-card bg-light">
                                        <h3>Loans Approved</h3>
                                        <p id="loans-approved">3</p>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-md-4" onClick={()=>handleApplicationTracking('pending')}>
                                    <Link to="/applications">
                                    <div className="dashboard-card bg-light">
                                        <h3>Pending Applications</h3>
                                        <p id="pending-applications">{pendingEnquiryCount}</p>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner_section-profile layout_padding">
                <div className="container">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"> 
                        <div className="carousel-inner">
                            <div className="carousel-item active"> 
                                <div className="client_section_2 layout_padding">
                                    <img src="assets/images/slider3.png" className="img-banner-profile" /> 
                                </div>
                            </div>
                            <div className="carousel-item"> 
                                <div className="client_section_2 layout_padding">
                                    <img src="assets/images/slider2.png" className="img-banner-profile" />
                                </div>
                            </div>
                            <div className="carousel-item"> 
                                <div className="client_section_2 layout_padding">
                                    <img src="assets/images/slider1.jpg" className="img-banner-profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </>
    )
}
