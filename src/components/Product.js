import React from "react";
import "../styles/Product.css";
import { Link } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

function Product({ curElem }) {
  const { id, name, image, price, category } = curElem;
  return (
    <>
    <Link to={`/singleProduct/${id}`}>
      <div className="card">
        <img src={image} alt="" />
        <p className="category">{category}</p>
      </div>
    <div className="p_n">
       <div> {name}</div> <div> <FormatPrice price={price}/> </div>
    </div>
      </Link>
    </>
  );
}

export default Product;
