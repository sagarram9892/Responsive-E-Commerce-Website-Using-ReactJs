import React from "react";
import FilterSection from "./Products/FilterSection";
import Sort from "./Products/Sort";
import ProductsList from "./Products/ProductsList";
import "./styles/Products.css";


function Products() {
  return (
    <>
      <div className="all_products">
        <div className="filtersection">
          <FilterSection />
        </div>

        <div className="two_column">
          <div className="sort">
            <Sort />
          </div>
          <div className="map_products">
           <ProductsList/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
