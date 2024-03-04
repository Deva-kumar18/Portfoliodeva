import React, { useState, useEffect } from 'react';
import './Navbar.css';
import CROSS from '../../Assets/cross.png';
import Hamburger from '../../Assets/hamburger.png';


const Navbar = () => {
    const [toggle, setToggle] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 660);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setToggle(!toggle);
    };

    return (
        <div className='navbar-container'>
            <div className='nav'>
                {isMobile && (
                    <img
                        className={`toggle-icon ${toggle ? '' : 'rotate-icon'}`}
                        onClick={toggleMenu}
                        src={toggle ? Hamburger : CROSS}
                        alt='Toggle Menu'
                    />
                )}
                <h1>Devakumar</h1>
                {isMobile ? (
                    toggle ? (
                        ""
                    ) : (
                        <div className={`links ${!toggle ? 'smooth-transition' : ''}`}>
                            <ul>
                                <li>Home</li>
                               <li>Skills</li> 
                                <li>Projects</li>
                                <li>About</li> 
                                <li>Contact</li>
                            </ul>
                        </div>
                    )
                ) : (
                    <div className='linkss'>
                        <ul>
                                <li>Home</li>
                                <li>Skills</li> 
                                <li>Projects</li>
                                <li>About</li> 
                                <li>Contact</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;


