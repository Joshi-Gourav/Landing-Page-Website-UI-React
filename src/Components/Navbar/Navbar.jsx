import React from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Navlinks } from './constants';

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <div className="navbarLeftSection">
                <div className="navLogo">
                    <h3 className='headerLogo'>
                        <Link to="/">COMMERCE</Link></h3>
                </div>
                <ul className='navLinks'>
                    {Navlinks.map((navlink, index) => (
                        <li key={index}><Link to="/">{navlink.title}</Link></li>
                    ))}
                </ul>
            </div>
            <div className="navbarRightSection">
                <label className="login">Login</label>
                <button className="loginBtn" onClick={() => { alert("Boston Consulting Group") }}>Get Started </button>
                <SearchIcon className='icon' />
            </div>
        </div>
    )
}

export default Navbar