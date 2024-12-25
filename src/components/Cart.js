import React from "react";
import "../styles/Cart.css";
import { useCartContext } from "../Productcontext/CartContext";
import { FaTrash } from "react-icons/fa";
import FormatPrice from "../Helpers/FormatPrice";
import { NavLink } from "react-router-dom";
import CartAmountToggle from "./CartAmountToggle";

function Cart() {
  const {
    cart,
    removeItem,
    clearCart,
    setDecrease,
    setIncrease,
    total_price,
    shipping_fee,
  } = useCartContext();
  if (cart.length === 0) {
    return (
      <div className="empty_cap">
        <h3>Your Cart Is Empty !</h3>
      </div>
    );
  }
  return (
    <div className="cart_container">
      <div className="name_column">
        <p className="item">Item</p>
        <p className="price">Price</p>
        <p className="quantity hide">Quantity</p>
        {/* <div className="media-gap"></div> */}
        <p className="subtotal">Subtotal</p>
        <p className="remove">Remove</p>
      </div>
      <hr />

      <div className="cart_item">
        {cart.map((curElem) => {
          const { id, name, color, amount, price, image } = curElem;
          return (
            <>
              <div className="cart_item_container">
                <div className="name_color">
                  <img src={image} alt="" />
                  <div className="n_c">
                    <p>{name}</p>
                    <p className="color-segment">
                      Color:
                      <button style={{ backgroundColor: color }}></button>
                    </p>
                  </div>
                </div>
                <div className="mini_price">
                  <p>
                    <FormatPrice className="same hide " price={price} />
                  </p>
                </div>
                <div className="media-gap"></div>
                {/* <p className="amount1">{amount}</p> */}
                <CartAmountToggle
                  amount={amount}
                  setDecrease={() => setDecrease(id)}
                  setIncrease={() => setIncrease(id)}
                />
                <div className="f-price">
                  <FormatPrice price={amount * price} />
                </div>
                <p className="t-trash" onClick={() => removeItem(id)}>
                  <FaTrash className="trash" />
                </p>
              </div>
            </>
          );
        })}
        <hr />
        <div className="two_btns">
          <NavLink to={"/products"}>
            <button className="shop_btn">Continue Shopping</button>
          </NavLink>
          <button className="clear_btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>

      <div className="subtotal_price">
        <div className="s-center">
          <div className="t-flex">
            Subtotal :
            <p>
              <FormatPrice price={total_price} />
            </p>
          </div>
          <div className="t-flex">
            Shipping fee :
            <p>
              <FormatPrice price={shipping_fee} />
            </p>
          </div>
          <hr className="line" />
          <div className="total">
            <div className="t-flex">
              Order Total :
              <p>
                <FormatPrice price={total_price + shipping_fee} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
