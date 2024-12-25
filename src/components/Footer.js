import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="g-start">
          <p className="caption">
            Ready to get started <br /> Talk to us Today
          </p>
          <Link to={"/"}>
            <button className="g-btn">GET STARTED</button>
          </Link>
        </div>
        <div className="down">
          <div className="first">
            <Link to={"/"}>
              <h1>Store</h1>
            </Link>
            <p className="caption">
              Lorem ipsum dolor sit amet <br />
              consectetur adipisicing elit.{" "}
            </p>
          </div>
          <div className="second">
            <p className="caption">
              Subscribe to get important <br /> updates
            </p>
            <input
              type="text"
              placeholder="ENTER YOUR EMAIL"
              className="text"
            />
            <button className="s-btn">SUBSCRIBE</button>
          </div>
          <div className="third">
            <p className="caption">Follow Us</p>
            <div className="icons">
              <div className="icon">
                {" "}
                <FiTwitter />{" "}
              </div>
              <div className="icon">
                <FiInstagram />
              </div>
              <div className="icon">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="fourth">
            <p className="caption">Call Us</p>
            <Link>+91222455623</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
