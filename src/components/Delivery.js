import React from "react";
import "../styles/Delivery.css";
import { TbTruckDelivery } from "react-icons/tb";
import { GiCheckedShield } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

function Delivery() {
  return (
    <>
      <div className="container">
        <div className="delivery">
          <TbTruckDelivery className="icon"/>
          <h2>Super Fast and Free Delivery</h2>
        </div>
        <div className="shipping">
          <div className="first">
            <GiCheckedShield className="icon"/>
            <h2>Non-contact Shiping</h2>
          </div>
          <div className="second">
            <GiReceiveMoney className="icon"/>
            <h2>Money-back Guaranteed</h2>
          </div>
        </div>
        <div className="payment">
          <RiSecurePaymentLine className="icon"/>
          <h2>Super Secure Payment System</h2>
        </div>
      </div>
    </>
  );
}

export default Delivery;
