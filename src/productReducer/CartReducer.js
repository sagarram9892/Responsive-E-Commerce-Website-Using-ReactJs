function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, amount, product } = action.payload;

      // check the existing product
      let existingProduct = state.cart.find(
        (curElem) => curElem.id === id + color
      );

      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id + color) {
            let newAmount = curElem.amount + amount;
            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      }

      let cartProduct = {
        id: id + color,
        name: product.name,
        price: product.price,
        color,
        amount,
        image: product.image[0].url,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };

    case "REMOVE_ITEM":
      let updatedData = state.cart.filter((curElem) => {
        return curElem.id !== action.payload;
      });
      return {
        ...state,
        cart: updatedData,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "SET_INCREASE":
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let newAmount = curElem.amount + 1;
          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };

    case "SET_DECREASE":
      let updatedProduc = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let newAmount = curElem.amount - 1;
          if (newAmount <= 1) {
            newAmount = 1;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduc,
      };

    case "CART_TOTAL_ITEM":
      let updatedTotalItem = state.cart.reduce((initialVal, curElem) => {
        let { amount } = curElem;
        initialVal = initialVal + amount;
        return initialVal;
      }, 0);
      return {
        ...state,
        total_item: updatedTotalItem,
      };

    case "SUBTOTAL_PRICE":
      let total_price = state.cart.reduce((initialVal, curElem) => {
        let { price, amount } = curElem;

        initialVal = initialVal + price * amount;

        return initialVal;
      }, 0);
      return {
        ...state,
        total_price
      };

    default:
      return state;
  }
}

export default CartReducer;
