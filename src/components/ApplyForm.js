import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { Link, useNavigate } from 'react-router-dom';

export default function ApplyForm() { 
    const navigate = useNavigate(); 

    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [email,setEmail] = useState();
    const [appliedFor,setAppliedFor] = useState(localStorage.getItem('flag')||'');
    const [panNumber,setPanNumber] = useState();

    const [file, setFile] = useState(null);
    const [userDetails, setUserDetails] = useState(); 
    const [formErrors, setFormErrors] = useState({});

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('appliedFor', appliedFor);
        formData.append('panNumber', panNumber);

        if (file) {
            formData.append('file', file);
        }
        
        console.log("Submit formData data",formData); 
        const errors = validate({ firstName, lastName, email, appliedFor, panNumber, file });
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            let customer_id = localStorage.getItem('customer_id');
            const response = await fetch(`http://localhost:5000/api/customer/addEnquiry/${customer_id}`, {
                method: 'POST',
                body: formData
            });

            const json = await response.json();
            // console.log(json);
            if (json.success) {
                toast.success(json.message); 
            } else {
                console.log(json.errors);
                toast.error(json.message);
            } 
        }
    };

    const validate = (values) => {
        const errors = {};
        if (!values.panNumber) {
            errors.panNumber = 'PAN Number is required';
        }
        if (!values.file) {
            errors.file = 'User Identity is required';
        }
        return errors;
    };

    useEffect(()=>{ 
        if (localStorage.getItem('tocken') != null) {
             navigate('');
        } 

        const userData = async () => {
            let customer_id = localStorage.getItem('customer_id');
            const response = await fetch(`http://localhost:5000/api/customer/details/${customer_id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const json = await response.json();
            console.log(json);
            if (json.success) {
                setUserDetails(json.data);
                setFirstName(json.data.first_name);
                setLastName(json.data.last_name);
                setEmail(json.data.email); 
            } else {
                console.log(json.message);
            }
        };

        userData();
    }, []);

    return (
        <>
            <Header />
            <div className="contact_section layout_padding">
                <div className="container-fluid">
                    <h1 className="what_taital">Apply Form</h1>
                    <div className="contact_section2">
                        <div className="row">
                            <div className="col-md-12 padding_left_0">
                                <h1>Please fill out this form to proceed.</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="mail_section">
                                        <div className='row'>
                                            <div className="col-md-6">
                                                <label>First Name</label>
                                                <input
                                                    type="text"
                                                    className="mail_text_2"
                                                    placeholder="First Name"
                                                    name="first_name" 
                                                    value={firstName}
                                                    readOnly
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label>Last Name</label>
                                                <input
                                                    type="text"
                                                    className="mail_text_2"
                                                    placeholder="Last Name"
                                                    name="last_name" 
                                                    value={lastName}
                                                    readOnly
                                                />
                                            </div>
                                        </div>   
                                        <div className='row'>
                                            <div className="col-md-6">
                                                <label>Email</label>
                                                <input
                                                    type="email"
                                                    className="mail_text_2"
                                                    placeholder="Email"
                                                    name="email" 
                                                    value={email}
                                                    readOnly
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label>Applied For</label>
                                                <input
                                                    type="text"
                                                    className="mail_text_2"
                                                    placeholder="Apply For"
                                                    name="applied_for" 
                                                    value={appliedFor}
                                                    readOnly
                                                />
                                            </div>
                                        </div>  
                                        <div className='row'>
                                            <div className="col-md-6">
                                                <label>PAN Number</label>
                                                <input
                                                    type="text"
                                                    className="mail_text_2"
                                                    placeholder="PAN Number"
                                                    name="pan_number"
                                                    onChange={(e)=>setPanNumber(e.target.value)} 
                                                    value={panNumber}
                                                />
                                                {formErrors.panNumber && <p style={{ color: 'red' }}>{formErrors.panNumber}</p>}
                                            </div>                                            
                                            <div className="col-md-6">
                                                <label>User Identity</label>
                                                <input
                                                    type="file"
                                                    className="mail_text_2"
                                                    placeholder="User Identity"
                                                    name="user_identity"
                                                    onChange={handleFileChange}
                                                />
                                                {formErrors.file && <p style={{ color: 'red' }}>{formErrors.file}</p>}
                                            </div>
                                            
                                        </div>  
                                        <br /> 
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
            <ToastContainer />
        </>
    );
}
