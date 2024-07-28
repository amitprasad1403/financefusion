import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [otpButton, setOtpButton] = useState(false);
    const [timeoutCount, setTimeoutCount] = useState(60);

    const [formErrors,setFormErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'otp') {
            setOtp(value);
        }
    };

    const sendOtp = async (e) => {
        e.preventDefault();
        const errors = validate({ email });
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            // Add form submission logic here
            const response = await fetch('http://localhost:5000/api/customer/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
            const json = await response.json();
            console.log(json);
            if (json.success) {
                // console.log("Success");
                setOtpButton(true)
                toast.success(json.message); 
            } else {
                console.log(json.errors);
                toast.error(json.message);
            }
        }
    };

    const resendOtp = async () => {
        console.log("Resend")
        setTimeoutCount(60)
        setOtpButton(false)
        // Add form submission logic here
        const response = await fetch('http://localhost:5000/api/customer/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // console.log("Success");
            setOtpButton(true)
            toast.success(json.message); 
        } else {
            console.log(json.errors);
            toast.error(json.message);
        }
    }

    const submitLogin = async (e) => {
        e.preventDefault();

        const errors = validate({ email, otp });
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {

            const response = await fetch(`http://localhost:5000/api/customer/checkLogin`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({email,otp})
            });
            const json = await response.json()
            console.log(json)
            if(json.success){
                setOtpButton(true)
                toast.success(json.message); 
                localStorage.setItem('tocken',json.tocken)
                localStorage.setItem('userEmail',email)
                localStorage.setItem('customer_id',json.customer_id)
                navigate("/profile") 
            }else{
                console.log(json.errors);
                toast.error(json.message);
            }
        }

    }

    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email address is invalid';
        }
        if (otpButton && !values.otp) {
            errors.otp = 'OTP is required';
        }
        return errors;
    };

    useEffect(()=>{ 

        const timer = () => {
            if(otpButton && timeoutCount > 0){
                // console.log("Timer start")
                setTimeout(() => {
                    setTimeoutCount(timeoutCount - 1)
                }, 1000);    
                
                // console.log("Time remaining :- ",timeoutCount)
            }            
        } 
        
        timer()
    },[timeoutCount,otpButton])

    return (
        <>
            <Header />
            <div className="header_left">
                <div className="banner_main">
                    <h1 className="what_taital-login">Login</h1>
                    <div className="btn_main">
                        <form>
                            <div className="mail_section">
                                <input
                                    type="email"
                                    className="mail_text_1"
                                    placeholder="Email"
                                    name="email"
                                    onChange={handleChange}
                                    value={email}
                                />
                                {formErrors.email && <p style={{ color: 'red' }}>{formErrors.email}</p>}
                                { otpButton && 
                                    <>
                                        <input
                                            type="text"
                                            className="mail_text_1"
                                            placeholder="OTP"
                                            name="otp"
                                            onChange={handleChange}
                                            value={otp}
                                        />  
                                        {formErrors.otp && <p style={{ color: 'red' }}>{formErrors.otp}</p>}
                                        <br/> 
                                        <br/>
                                        <span style={{color:`green`,fontWeight:`bold`}}>Otp expires in : {timeoutCount} seconds.</span>
                                        { timeoutCount == 0 &&
                                            <span onClick={resendOtp} style={{color:`green`,fontWeight:`bold`,float:`right`,cursor:`pointer`}}>Resend OTP</span>
                                        }
                                        <br /> 
                                    </>
                                }  
                                <br />
                                <br />
                                <h3>Doesn't have an account? <Link to="/register" style={{color:`red`}}>Register</Link></h3>
                                {   otpButton?
                                    <button className="submit_bt" onClick={submitLogin}>
                                        Submit
                                    </button>
                                    :
                                    <button className="send_bt" onClick={sendOtp}>
                                        Send OTP
                                    </button>
                                } 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="header_right">
                <img src="assets/images/login.jpg" className="banner_img" alt="Login banner" />
            </div>
            <Footer />
            <ToastContainer />
        </>
    );
}
