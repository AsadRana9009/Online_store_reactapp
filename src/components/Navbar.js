import React, { useState } from 'react';
import './Navbar.css';
import Dropdown from './Dropdown';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

function Navbar() {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    };
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    };

    const onMouseEnter1 = () => {
        if (window.innerWidth < 960) {
            setDropdown1(false)
        } else {
            setDropdown1(true)
        }
    };
    const onMouseLeave1 = () => {
        if (window.innerWidth < 960) {
            setDropdown1(false)
        } else {
            setDropdown1(false)
        }
    };

    const onMouseEnter2 = () => {
        if (window.innerWidth < 960) {
            setDropdown2(false)
        } else {
            setDropdown2(true)
        }
    };
    const onMouseLeave2 = () => {
        if (window.innerWidth < 960) {
            setDropdown2(false)
        } else {
            setDropdown2(false)
        }
    };


    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img src={logo} alt="logo" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/stores' className='nav-links' onClick={closeMobileMenu}>
                            Stores <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>
                        <Link to='/collections' className='nav-links' onClick={closeMobileMenu}>
                            Collections <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown1 && <Dropdown1 />}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
                        <Link to='/custom' className='nav-links' onClick={closeMobileMenu}>
                            Custom <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown2 && <Dropdown2 />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;