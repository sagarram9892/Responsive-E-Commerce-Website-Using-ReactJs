import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../productReducer/FilterReducer";

const FilterProvider = createContext();

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
      text: "",
      category: "all",
      company: "all",
      color: "all",
      maxPrice: 0,
      price: 0,
      minPrice: 0,
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // to set gridview
  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  // to set listview
  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };

  // to get sorting value
  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
  };

  // to clear the filter
  const clearfilter = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };

  // to get input value
  // const updateFilterValue = (event) =>{
  //   let name = event.target.name;
  //   let value = event.target.value;

  //  dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  // }

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "GET_NEW_SORT_PRODUCTS" });
  }, [state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterProvider.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilterValue , clearfilter }}
    >
      {children}
    </FilterProvider.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterProvider);
};

export { FilterContextProvider, useFilterContext };
