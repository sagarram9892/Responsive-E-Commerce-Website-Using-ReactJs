import React from "react";
import "../styles/ListView.css";
import { Link } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

function ListView({ products }) {
  return (
    <>
      <div className="column_products">
        {products.map((curElem) => {
          const { id, image, name , price , description } = curElem;

          return (
            <div key={curElem.id} className="product_box">
              <div className="img_box">
                <img src={image} alt="" />
              </div>
              <div className="content_details">
                <p className="name_box">{name}</p>
                <FormatPrice price={price} className="price_box" />
                <p className="description_box">{description.slice(0 , 90)}...</p>
                <Link to={`/singleProduct/${id}`} className="btn_box">Read More</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListView;
