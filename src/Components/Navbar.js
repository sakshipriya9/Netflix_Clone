import React, { useEffect, useState } from "react";
import './Navbar.css';

function Navbar (){
    const [show,setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setShow(true);
            }else{
                setShow(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return() =>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className= {`navbar ${show && "navbar--solid"}`}>
            <div className="navbar_contents">
                <img 
                className="navbar__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
                />

                <img 
                className="navbar__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="User Avatar"
                />
            </div>
        </div>
    );
};

export default Navbar;