// import React from "react";
// import "../styles/FilterSection.css";
// import { useFilterContext } from "../Productcontext/FilterContext";

// function FilterSection() {
//   const {
//     filters: { text },
//     updateFilterValue,
//     all_products,
//   } = useFilterContext();

//   const getUnique = (data, property) => {
//     let newVal = data.map((curElem) => {
//       return curElem[property];
//     });

//     return (newVal = ["all", ...new Set(newVal)]);
//   };

//   const categoryData = getUnique(all_products, "category");

//   const companyData = getUnique(all_products, "company");
//   return (
//     <>
//       <div className="filter-search">
//         <input
//           type="text"
//           name="text"
//           value={text}
//           onChange={updateFilterValue}
//         />
//       </div>

//       <div className="main-category">
//         <h3>Category</h3>
//         <div className="min-category">
//           {categoryData.map((curElem, index) => {
//             return (
//               <button
//                 key={index}
//                 name="category"
//                 value={curElem}
//                 onClick={updateFilterValue}
//               >
//                 {curElem}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       <div className="company-filter">
//         <h3>Company</h3>
//         <select
//           name="company"
//           onClick={updateFilterValue}
//           className="select-style"
//         >
//           {companyData.map((curElem, index) => {
//             return (
//               <option key={index} name="company" value={curElem}>
//                 {curElem}
//               </option>
//             );
//           })}
//         </select>
//       </div>
//     </>
//   );
// }

// export default FilterSection;

import React from "react";
import "../styles/FilterSection.css";
import { useFilterContext } from "../Productcontext/FilterContext";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../Helpers/FormatPrice";

function FilterSection() {
  const {
    filters: { text, color, price , maxPrice , minPrice},
    updateFilterValue,
    all_products,
    clearfilter
  } = useFilterContext();

  const getUnique = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });

    if (property === "colors") {
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryData = getUnique(all_products, "category");

  const companyData = getUnique(all_products, "company");

  const colorsData = getUnique(all_products, "colors");

  return (
    <>
      <div className="filter-search">
        <input
          type="text"
          name="text"
          value={text}
          onChange={updateFilterValue}
        />
      </div>

      <div className="main-category gap">
        <h3>Category</h3>
        <div className="min-category">
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                name="category"
                value={curElem}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="company-filter gap">
        <select
          name="company"
          onClick={updateFilterValue}
          className="select-style"
        >
          {companyData.map((curElem, index) => {
            return (
              <option key={index} name="company" value={curElem}>
                {curElem}
              </option>
            );
          })}
        </select>
      </div>

      <div className="color-filter gap">
        <h3>Colors</h3>

        <div className="color-style">
          {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  name="color"
                  value={curColor}
                  style={{ backgroundColor: "transparent" }}
                  onClick={updateFilterValue}
                >
                  All
                </button>
              );
            }
            return (
              <button
                key={index}
                name="color"
                value={curColor}
                style={{ backgroundColor: curColor }}
                onClick={updateFilterValue}
              >
                {curColor === color ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="price-filter gap">
        <h3>Price</h3>
        <p><FormatPrice price={price}/></p>
        <input type="range" name="price" max={maxPrice} min={minPrice} value={price}  onChange={updateFilterValue} />
      </div>

      <div className="clear-filter">
        <button onClick={clearfilter} className="clearfilter">Clear Filter</button>
      </div>
    </>
  );
}

export default FilterSection;
