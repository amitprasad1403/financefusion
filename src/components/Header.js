import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import ReactLoading from 'react-loading';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [login, setLogin] = useState(false); 

    const handleLogout = () => {
        navigate("");
        localStorage.clear();
        setLogin(false); 
    };

    useEffect(() => {
        if (localStorage.getItem('tocken') != null) {
            setLogin(true);
        } 
    }, []);

    return (
        <div className="header_section header_bg">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="logo-header">
                    <Link to="/"><img src="assets/images/logo-new.jpg" alt="Logo" /></Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={`nav-item ${location.pathname === '/' ? 'active-header' : ''}`}>
                            <Link to="/" style={navLinkStyle}>Home</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/about' ? 'active-header' : ''}`}>
                            <Link to="/about" style={navLinkStyle}>About</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/services' ? 'active-header' : ''}`}>
                            <Link to="/services" style={navLinkStyle}>Services</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/contactus' ? 'active-header' : ''}`}>
                            <Link to="/contactus" style={navLinkStyle}>Contact Us</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        {login && (
                            <li className={`nav-item ${location.pathname === '/profile' || location.pathname === '/applications' ? 'active-header' : ''}`}>
                                <Link to="/profile" style={profileIconStyle}><CgProfile /></Link>
                            </li>
                        )}
                        {login ? (
                            <li className="nav-item">
                                <Link to="/login" style={logoutIconStyle} onClick={handleLogout}><IoIosLogOut /></Link>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link to="/login" style={loginLinkStyle}>Login</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

const navLinkStyle = {
    display: 'block',
    padding: '.5rem 1rem',
    paddingRight: '13px',
    paddingLeft: '13px',
    fontSize: '18px',
    color: '#2e2d2e',
    textTransform: 'uppercase'
};

const profileIconStyle = {
    display: 'block',
    padding: '.5rem 1rem',
    paddingRight: '13px',
    marginBottom: '-10px',
    paddingLeft: '13px',
    fontSize: '25px',
    color: '#007dfe',
    textTransform: 'uppercase'
};

const logoutIconStyle = {
    display: 'block',
    padding: '.5rem 1rem',
    paddingRight: '13px',
    paddingLeft: '13px',
    marginBottom: '-10px',
    fontSize: '25px',
    color: 'red',
    textTransform: 'uppercase'
};

const loginLinkStyle = {
    display: 'block',
    padding: '.5rem 1rem',
    paddingRight: '13px',
    paddingLeft: '13px',
    fontSize: '18px',
    color: 'red',
    textTransform: 'uppercase'
};
