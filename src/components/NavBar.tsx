import React from 'react';

const NavBar = () => {
    return (
        <div className="header">
            <a href="#" className="logo">
                <img src="/coffee.jpg" alt="logo"/>
            </a>
            <nav className={"nav-content"}>
                <a href={"#home"}>Home</a>
                <a href={"#about"}>About</a>
                <a href={"#menu"}>Menu</a>
                <a href={"#products"}>Products</a>
                <a href={"#review"}>Review</a>
                <a href={"#contact"}>Contact</a>
                <a href={"#blogs"}>Blogs</a>
            </nav>
            <div className="icons">
            <div className="fas fa-search" id="search-btn"></div>
            <div className="fas fa-shopping-cart" id="cart-btn"></div>
            <div className="fas fa-bars" id="menu-btn"></div>
            </div>
        </div>

    );
};

export default NavBar;