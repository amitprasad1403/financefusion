import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        full_name: '',
        phone_number: '',
        email: '',
        message: ''
    });

    const [formErrors,setFormErrors] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);

        const errors = validate({ formData });
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Add form submission logic here
            const response = await fetch('http://localhost:5000/api/contact_us/add', {
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
                toast.success("Form submitted successfully!");
                setFormData({
                    full_name: '',
                    phone_number: '',
                    email: '',
                    message: ''
                })
            } else {
                console.log(json.errors);
                toast.error("There was an error submitting the form.");
            }
        }
    };

    const validate = (values) => {
        const errors = {};
        if (!values.full_name) {
            errors.full_name = 'Full name is required';
        }
        if (!values.phone_number) {
            errors.phone_number = 'Phone number is required';
        } else if (values.phone_number.length < 10) {
            errors.phone_number = 'Phone number must be of 10 digits';
        } else if (values.phone_number.length > 10) {
            errors.phone_number = 'Phone number should not be more than 10 digits';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!values.message) {
            errors.message = 'Message is required';
        }
        return errors;
    };

    return (
        <>
            <Header />
            <div className="contact_section layout_padding">
                <div className="container-fluid">
                    <h1 className="what_taital">Contact us</h1>
                    <div className="contact_section2">
                        <div className="row">
                            <div className="col-md-6 padding_left_0">
                                <h1>Get an enquiry call by just submitting this form.</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="mail_section">
                                        <input
                                            type="text"
                                            className="mail_text_1"
                                            placeholder="Name"
                                            name="full_name"
                                            onChange={handleChange}
                                            value={formData.full_name}
                                        />
                                        {formErrors.full_name && <p style={{ color: 'red' }}>{formErrors.full_name}</p>}
                                        <input
                                            type="text"
                                            className="mail_text_1"
                                            placeholder="Phone Number"
                                            name="phone_number"
                                            onChange={handleChange}
                                            value={formData.phone_number}
                                        />
                                        {formErrors.phone_number && <p style={{ color: 'red' }}>{formErrors.phone_number}</p>}
                                        <input
                                            type="email"
                                            className="mail_text_1"
                                            placeholder="Email"
                                            name="email"
                                            onChange={handleChange}
                                            value={formData.email}
                                        />
                                        {formErrors.email && <p style={{ color: 'red' }}>{formErrors.email}</p>}
                                        <textarea
                                            className="massage_text"
                                            placeholder="Message"
                                            rows="5"
                                            id="comment"
                                            name="message"
                                            onChange={handleChange}
                                            value={formData.message}
                                        ></textarea>
                                        {formErrors.message && <p style={{ color: 'red' }}>{formErrors.message}</p>}
                                        <button className="send_bt" type="submit">
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6 padding_0">
                                <div className="map-responsive">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59984.1477301544!2d73.7157195635036!3d20.008127187646014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1720901280394!5m2!1sen!2sin"
                                        width="600"
                                        height="400"
                                        frameBorder="0"
                                        style={{ border: '0', width: '100%' }}
                                        allowFullScreen=""
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </>
    );
}
