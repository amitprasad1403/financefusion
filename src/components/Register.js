import React, { useState, useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address: '',
        pincode: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // Add form submission logic here
        const response = await fetch('http://localhost:5000/api/customer/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            console.log("Success");
            toast.success("Registered successfully!");
            toast.success("Please check your email to verify.");
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                address: '',
                pincode: ''
            })
        } else {
            console.log(json.errors);
            toast.error("There was an error while registration.");
        }
    };

    return (
        <>
            <Header />
            <div className="contact_section layout_padding">
                <div className="container-fluid">
                    <h1 className="what_taital">Register</h1>
                    <div className="contact_section2">
                        <div className="row">
                            <div className="col-md-12 padding_left_0">
                                <h1>Please enter below details to register.</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="mail_section">
                                        <div className='row'>
                                            <div className='col-md-6'> 
                                                <input
                                                    type="text"
                                                    className="mail_text_1"
                                                    placeholder="First Name"
                                                    name="first_name"
                                                    onChange={handleChange}
                                                    value={formData.first_name}
                                                />
                                            </div>
                                            <div className='col-md-6'> 
                                                <input
                                                    type="text"
                                                    className="mail_text_1"
                                                    placeholder="Last Name"
                                                    name="last_name"
                                                    onChange={handleChange}
                                                    value={formData.last_name}
                                                />
                                            </div>
                                        </div>


                                        <div className='row'>
                                            <div className='col-md-6'> 
                                                <input
                                                    type="text"
                                                    className="mail_text_1"
                                                    placeholder="Email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    value={formData.email}
                                                />
                                            </div>
                                            <div className='col-md-6'> 
                                                <input
                                                    type="text"
                                                    className="mail_text_1"
                                                    placeholder="Phone Number"
                                                    name="phone_number"
                                                    onChange={handleChange}
                                                    value={formData.phone_number}
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'> 
                                                <input
                                                    type="text"
                                                    className="mail_text_1"
                                                    placeholder="Address"
                                                    name="address"
                                                    onChange={handleChange}
                                                    value={formData.address}
                                                />
                                            </div>
                                            <div className='col-md-6'> 
                                                <input
                                                    type="text"
                                                    className="mail_text_1"
                                                    placeholder="Pincode"
                                                    name="pincode"
                                                    onChange={handleChange}
                                                    value={formData.pincode}
                                                />
                                            </div>
                                        </div> 
                                        <h3>Already have an account? <Link to="/login" style={{color:`red`}}>Login</Link></h3>
                                        <button className="send_bt" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
