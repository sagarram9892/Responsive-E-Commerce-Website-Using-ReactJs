import React, { useState } from "react";
import "../styles/Addtocart.css";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { Link } from "react-router-dom";
import { useCartContext } from "../Productcontext/CartContext";

function Addtocart({ product }) {

  const {addToCart} = useCartContext()
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);

  const [amount , setAmount] = useState(1)

  const setDecrease=()=>{
    amount > 1 ? setAmount(amount - 1) : setAmount(1) 
  }

  const setIncrease=()=>{
    amount < stock ? setAmount(amount + 1) :setAmount(stock)
  }

  return (
    <>
      <div className="color">
        Colors:
        {colors.map((curColor, index) => {
          return (
            <span
              key={index}
              style={{ backgroundColor: curColor }}
              onClick={() => setColor(curColor)}
              className={color === curColor ? "style active" : "style"}
            >
              {color === curColor ? <FaCheck className="checkStyle" /> : null}
            </span>
          );
        })}
      </div>

      {/* add to cart */}

      <CartAmountToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease}/>

      <Link to={"/cart"} className="link" onClick={()=> addToCart(id , color , amount , product)}>
      <button className="addcart">Add To Cart</button>
      </Link>
    </>
  );
}

export default Addtocart;
