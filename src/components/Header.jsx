import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalProductCartContextHook } from "../context/AddTocartContext";

const Header = () => {
  const { totalCartItem } = GlobalProductCartContextHook();
  const loaction = useLocation();
  const pathName = loaction.pathname;
  const splitPathName = pathName.split("/");

  return (
    <header>
      <div className="container-lg container-fluid">
        <div className="header-cover">
          <Link to="">
            <h1 className="logo">
              Impact<span>.</span>
            </h1>
          </Link>
          <nav>
            <ul>
              <li>
                <Link
                  to="/"
                  className={splitPathName[1] === "" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={splitPathName[1] === "about" ? "active" : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className={splitPathName[1] === "product" ? "active" : ""}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className={splitPathName[1] === "service" ? "active" : ""}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={splitPathName[1] === "contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/wishlist"
                  className={splitPathName[1] === "wishlist" ? "active" : ""}
                >
                  <i className="fa fa-heart"></i>
                </Link>
              </li>
              <li className="countItem">
                <Link
                  to="/cart"
                  className={splitPathName[1] === "cart" ? "active" : ""}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>{totalCartItem}</span>
                </Link>
              </li>
            </ul>
            <div className="p-menu-btn">
              <i className="fa-solid fa-bars"></i>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
