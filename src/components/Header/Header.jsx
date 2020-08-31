import React from "react";
import Logo from "../../img/logo.svg";
const Header = () => {
    return (
        <header className="header">
            <a href="" className="header__logo">
                <img src={Logo} alt="" className="header__logo" />
            </a>
            <button className="header__menu-btn">
                click
            </button>
            <nav className="header__nav">
                <li>
                    <a href="">About me</a>
                </li>
                <li>
                    <a href="">Relationship</a>
                </li>
                <li>
                    <a href="">Requirements</a>
                </li>
                <li>
                    <a href="">Users</a>
                </li>
                <li>
                    <a href="">Sing Up</a>
                </li>
            </nav>
        </header>
    );
};

export default Header;
