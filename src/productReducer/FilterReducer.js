const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => {
        return curElem.price;
      });

      let maxPrice = Math.max(...priceArr);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice : maxPrice ,
          price: maxPrice,
        },
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      const userSortVlaue = document.getElementById("sort");
      const newGotValue =
        userSortVlaue.options[userSortVlaue.selectedIndex].value;
      return {
        ...state,
        sorting_value: newGotValue,
      };

    case "GET_NEW_SORT_PRODUCTS":
      let newProducts;
      const { filter_products } = state;
      let oldProducts = [...filter_products];

      if (state.sorting_value === "lowest") {
        newProducts = oldProducts.sort((a, b) => a.price - b.price);
      }

      if (state.sorting_value === "highest") {
        newProducts = oldProducts.sort((a, b) => b.price - a.price);
      }

      if (state.sorting_value === "a-z") {
        newProducts = oldProducts.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (state.sorting_value === "z-a") {
        newProducts = oldProducts.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        filter_products: newProducts,
      };

    // case "UPDATE_FILTERS_VALUE":
    //   const { name, value } = action.payload;
    //   return {
    //     ...state,
    //     filters: {
    //       ...state.filters,
    //       [name]: value,
    //     },
    //   };

    // case "FILTER_PRODUCTS":
    //   let { all_products } = state;
    //   let tempFilterProducts = [...all_products];

    //   const { text, category , company} = state.filters;

    //   if (text) {
    //     tempFilterProducts = tempFilterProducts.filter((curElem) =>{
    //      return curElem.name.toLowerCase().includes(text)
    //   });
    //   }

    //   if (category !== "all") {
    //     tempFilterProducts = tempFilterProducts.filter((curElem) => {
    //       return curElem.category === category;
    //     });
    //   }

    //   if (company !== "all") {
    //     tempFilterProducts = tempFilterProducts.filter((curElem) => {
    //       return curElem.company === company;
    //     });
    //   }

    //   return {
    //     ...state,
    //     filter_products: tempFilterProducts,
    //   };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProducts = [...all_products];

      const { text, category, company, color  , price} = state.filters;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.category === category;
        });
      }

      if (company !== "all") {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.company === company;
        });
      }

      if (color !== "all") {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.colors.includes(color);
        });
      }

      if(price){
        tempFilterProducts = tempFilterProducts.filter((curElem)=>{
          return curElem.price <= price
        })
      }

      return {
        ...state,
        filter_products: tempFilterProducts,
      };

      case "CLEAR_FILTER" :
        return{
          ...state,
          filters:{
            ...state.filters,
            text: "",
            category: "all",
            company: "all",
            color: "all",
            maxPrice: state.filters.maxPrice,
            price:  state.filters.maxPrice,
            minPrice: 0,
          }
        }

    default:
      return state;
  }
};

export default FilterReducer;
