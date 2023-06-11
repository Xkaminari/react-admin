import React, { useRef, useState } from 'react';
import empty_profile_picture from "./blank_profile_picture.png";
import { Link } from "react-router-dom";
import "./global.css"
import { tokens, useTheme } from '../../ThemeContext';

export default function Sidebar() {
    const isDark = useTheme()
    const [iscollapsed, setIsCollapsed] = useState(false);
    
    const mainStyle = {
        backgroundColor: tokens(isDark).secondary,
        color: tokens(isDark).text,
    }
    const linkStyle = {
        color: tokens(isDark).text,
    }
    
    const sidbar = useRef();
    const Logo = useRef();
    const accountProfile = useRef();
    const sections = useRef();

    function collapse() {
        if (!iscollapsed) {
            Logo.current.style.opacity = "0";
            accountProfile.current.style.opacity = "0";
            sections.current.style.opacity = "0";
            setTimeout(() => {
                Logo.current.style.display = "none";
                accountProfile.current.style.display = "none";
                sections.current.style.display = "none";
                sidbar.current.style.width ="100%"
            }, 400);
        } else {
            Logo.current.style.opacity = "1";
            accountProfile.current.style.opacity = "1";
            sections.current.style.opacity = "1";
            setTimeout(() => {
                Logo.current.style.display = "block";
                accountProfile.current.style.display = "flex";
                sections.current.style.display = "block";
                sidbar.current.style.width ="15vw"
            }, 400);
        }
        setIsCollapsed(prevIsCollapsed => !prevIsCollapsed)
    }

    return (
        <div className='sidebar' ref={sidbar} style={mainStyle}>
            <div className='sidbar_wrapper'>
                <div className='sidbar_head' style={mainStyle}>
                    <h2 className='sidbar_logo' ref={Logo}>Logo</h2>
                    <div className='sidbar_button_wrapper'>
                        <div className='sidbar_button' onClick={collapse}>
                            {iscollapsed ? 
                            <i className="fa-solid fa-bars fa-lg"></i> : <i className="fa-solid fa-xmark fa-lg"></i>
                            }
                        </div>
                    </div>
                </div>
                <div className='account_profile'ref={accountProfile} style={mainStyle}>
                    <img className='profile_picture' src={empty_profile_picture} alt="profile picture" />
                    <div className='profile_details'>
                        <h3 className='user_name'>Med Yassine</h3>
                        <h6 className='user_type'>CEO</h6>
                    </div>
                </div>
                <div className='sections' ref={sections} style={mainStyle}>
                    <ul className='links_list'>
                        <li>
                            <i className="fa-solid fa-table-columns"></i>
                            <Link to={"/"} style={linkStyle}>Dashboard</Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-chart-simple"></i>
                            <Link to={"/"} style={linkStyle}>Analytics</Link>
                        </li>
                        <li>
                            <i className="fa-regular fa-id-badge"></i>
                            <Link to={"/"} style={linkStyle}>Customers</Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-id-card"></i>
                            <Link to={"/"} style={linkStyle}>Registered</Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-cart-flatbed"></i>
                            <Link to={"/"} style={linkStyle}>Orders</Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-database"></i>
                            <Link to={"/"} style={linkStyle}>Products</Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <Link to={"/"} style={linkStyle}>Reports</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
