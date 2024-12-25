import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import hero from "../Images/hero.jpg";
import FeaturedProducts from "./FeaturedProducts";
import Delivery from "./Delivery";
import Trusted from "./Trusted";

function Home() {
  return (
    <>
      <div className="home">
        <div className="content">
          <p>WELCOME TO</p>
          <h1>Store</h1>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            veritatis fugiat, natus culpa nihil tenetur.
          </p>
          <Link className="btn1">SHOP NOW</Link>
        </div>
        <div className="img">
          <img src={hero} alt="" />
        </div>
      </div>

      <div className="feature_products">
        <div className="width">
          <p>CHECK NOW!</p>
          <h1>Our Feature Services</h1>
        </div>
        <FeaturedProducts />
      </div>

      {/* about delivery */}
      <Delivery />

      {/*trusted companies */}
      <Trusted />
    </>
  );
}

export default Home;
