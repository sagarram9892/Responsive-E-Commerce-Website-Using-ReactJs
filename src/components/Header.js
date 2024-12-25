import React, { useState } from "react";
import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoMenu, IoClose } from "react-icons/io5";
import { useCartContext } from "../Productcontext/CartContext";

function Header() {
  const location = useLocation();
  const [menu, setMenu] = useState(true);
  const handleOpen = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  const {total_item} = useCartContext()
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to={"/"}>
            <h1>
              Store. <span></span>
            </h1>
          </Link>
        </div>
        <nav>
          <ul className={menu ? "open" : "mclose"}>
            <div className="mclose" onClick={handleOpen}>
              <IoClose className="close" />
            </div>
            <li>
              <Link
                to={"/"}
                className={location.pathname === "/" ? "active" : ""} onClick={handleOpen}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className={location.pathname === "/about" ? "active" : ""} onClick={handleOpen}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to={"/products"}
                className={location.pathname === "/products" ? "active" : ""} onClick={handleOpen}
              >
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className={location.pathname === "/contact" ? "active" : ""} onClick={handleOpen}
              >
                CONTACT
              </Link>
            </li>

            {/* <Link to={"/login"} className="btn" onClick={handleOpen}>
              LOG IN
            </Link> */}
            <div className="cart" onClick={handleOpen}>
              <Link to={"/cart"}>
                <FiShoppingCart />
                <div>{total_item}</div>
              </Link>
            </div>
          </ul>
        </nav>
        <div className="menu" onClick={handleOpen}>
          <IoMenu />
        </div>
      </header>
    </>
  );
}

export default Header;
