import React from 'react';
import Logo from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <header className="Header">
            <nav className="navbar">
                <a className="navbar-brand">
                    <img src={Logo} className="Logo" />
                </a>


                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            Home
                        </li>
                    </ul>
            </nav>
        </header>
    )
};
export default Header;
