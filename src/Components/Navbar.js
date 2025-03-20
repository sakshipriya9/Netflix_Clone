import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [show, setShow] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setShow(true);
            }else{
                setShow(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdown(!dropdown)
    };

    return(
        <div className= {`navbar ${show && "navbar--solid"}`}>
            <img 
                className="navbar_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />

            <div className="navbar_avatar-wrapper" onClick={toggleDropdown}>
            <img 
                className="navbar_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="User Avatar"
            />

            {dropdown && (
                <div className="navbar_dropdown">
                    <p> Profile </p>
                    <p> Account </p>
                    <p>Help Center </p>
                    <p> Sign Out </p>
                </div>
            )}
            </div>
        </div>
    );
};

export default Navbar;