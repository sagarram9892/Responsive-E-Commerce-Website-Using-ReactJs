import React, { useEffect } from "react";
import "../styles/SingleProduct.css";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../Productcontext/ProductContext";
import FormatPrice from "../Helpers/FormatPrice";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { GiCheckedShield } from "react-icons/gi";
import MImg from "../components/MImg"
import Star from "./Star";
import Addtocart from "./Addtocart";

function SingleProduct() {
  const API = "https://api.pujakaitem.com/api/products";

  const { getSingleProduct, singleProduct, isSingleLoading } =
    useProductContext();
  const {
    name,
    company,
    price,
    description,
    stock,
    reviews,
    stars,
    image,
  } = singleProduct;
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  return (
    <>
    <div className="navigation">
      <Link to={"/"}>Home</Link>/{name}
    </div>
      <div className="container">
        <div className="left">
          <MImg imgs={image}/>
        </div>
        <div className="right">
          <p className="name">{name}</p>
<Star stars={stars} reviews={reviews}/>
          <p className="w-price">
          MRP:  <FormatPrice price={price + 250000} />
          </p>
          <p className="main-price"> Deal of the Day:
            <FormatPrice price={price} />
          </p>
          <p className="para">{description}</p>
          <div className="d-icon">
            <div className="g-icon">
              <div className="v-icon">
                <TbTruckDelivery />
              </div>
              <small>Free Delivery</small>
            </div>
            <div className="g-icon">
              <div className="v-icon">
                <TbReplace />
              </div>
              <small>30 Days Replcement</small>
            </div>

            <div className="g-icon">
              <div className="v-icon">
                <TbTruckDelivery />
              </div>
              <small>Delivered</small>
            </div>

            <div className="g-icon">
              <div className="v-icon">
                <GiCheckedShield />
              </div>
              <small>2 Years Warranty</small>
            </div>
          </div>
          <p className="available">
            Available: <span>{stock ? "In Stock" : "Not Available"}</span>
          </p>
          <p className="id">ID: <span>{id}</span></p>
          <p className="brand">Brand: <span>{company}</span></p>

          <hr />
          {stock > 0 && <Addtocart product={singleProduct}/>}
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
