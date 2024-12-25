import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../productReducer/CartReducer";

const CartContext = createContext();

const getLocalStorageData = () => {
  let newStorageData = localStorage.getItem("store");

  if (newStorageData == []) {
    return [];
  } else {
    return JSON.parse(newStorageData);
  }
};

const initialState = {
  cart: getLocalStorageData(),
  total_item:"",
  total_price:"",
  shipping_fee: 50000
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // to set increase
  const setIncrease=(id)=>{
dispatch({type:"SET_INCREASE" , payload:id})
  }


  // to set decrease
  const setDecrease=(id)=>{
    dispatch({type:"SET_DECREASE" , payload:id})
  }

  const clearCart = ()=>{
    dispatch({type:"CLEAR_CART"})
  }

  // to set the data to localStorage
  useEffect(() => {
    dispatch({type:"CART_TOTAL_ITEM"})
    dispatch({type:"SUBTOTAL_PRICE"})
    localStorage.setItem("store", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem , clearCart , setDecrease , setIncrease}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
