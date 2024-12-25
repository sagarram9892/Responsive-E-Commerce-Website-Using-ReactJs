import React from "react";
import "../styles/Sort.css";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../Productcontext/FilterContext";

function Sort() {
  const { filter_products, setGridView, setListView, grid_view , sorting } =
    useFilterContext();
  return (
    <>
      <div className="sort_list">
        <div className="two_icons">
          <div
            className={grid_view ? "click icon" : "icon"}
            onClick={setGridView}
          >
            <BsFillGridFill/>
          </div>
          <div
            className={grid_view ? "icon" : "click icon"}
            onClick={setListView}
          >
            <BsList />
          </div>
        </div>
        <div className="middle_icon">
          {filter_products.length} Products Available
        </div>
        <div className="third_icon">
          <select name="sort" id="sort" onClick={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="highest">Price(highest)</option>
            <option value="a-z">Price(a-z)</option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Sort;
