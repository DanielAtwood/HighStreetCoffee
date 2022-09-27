import React from 'react';

const NavBar = () => {
    return (
        <div className="header">
            {/*HTML for logo/image*/}
            <a href="#" className="logo">
                <img src="/coffee.jpg" alt="logo"/>
            </a>
            {/*HTML for content links*/}
            <nav className={"nav-content"}>
                <a href={"#home"}>Home</a>
                <a href={"#about"}>About</a>
                <a href={"#menu"}>Menu</a>
                <a href={"#products"}>Products</a>
                <a href={"#review"}>Review</a>
                <a href={"#contact"}>Contact</a>
                <a href={"#blogs"}>Blogs</a>
            </nav>

            {/*HTML for buttons*/}
            <div className="icons">
                <div className="fas fa-search" id="search-btn"></div>
                <div className="fas fa-shopping-cart" id="cart-btn"></div>
                <div className="fas fa-bars" id="menu-btn"></div>
            </div>

            {/*HTML for search bar*/}
            <div className="search-form">
                <label form="search-box" className="fas fa-search"></label>
                <input type="search" id="search-box" placeholder="Search.."/>
            </div>

            {/*Item images and related information*/}
            <div className="cart-items-container">
                <div className="cart-item">
                    {/*Adds the "x" on the cart*/}
                    <span className="fas fa-times"></span>
                    {/*Adds images to the cart items*/}
                    <img src="../images/pumpkinspice.jpg" alt="Pumpkin Spice"/>
                    <div className="content">
                        <h3>cart item 01</h3>
                        <div className="price">$4.50/-</div>
                    </div>
                </div>

                <div className="cart-item">
                    <span className="fas fa-times"></span>
                    <img src="../images/icedcoffee.jpg" alt="Iced Coffee"/>
                    <div className="content">
                        <h3>cart item 02</h3>
                        <div className="price">$4.50/-</div>
                    </div>
                </div>

                <div className="cart-item">
                    <span className="fas fa-times"></span>
                    <img src="../images/waffles.jpg" alt="Smiling Waffles"/>
                    <div className="content">
                        <h3>cart item 03</h3>
                        <div className="price">$4.00/-</div>
                    </div>
                </div>

                <div className="cart-item">
                    <span className="fas fa-times"></span>
                    <img src="../images/fruitwaffle.jpg" alt="Fruit Waffles"/>
                    <div className="content">
                        <h3>cart item 04</h3>
                        <div className="price">$4.00/-</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;