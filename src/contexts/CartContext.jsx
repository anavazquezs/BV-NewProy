import { createContext, useReducer } from "react";
import { ACTIONS } from "../helpers/actions";
import cartReducer, { initialState } from "../reducers/cartReducer";

export const CartContext = createContext();

const CartContextProvider = (props) => {

  const [ state, dispatch ] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    const updatedCart = state.cart.concat(product);
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: {
        cart: updatedCart,
      }
    })
    };

  const removeFromCart = (product) => {
    const { id, cant } = product;

    dispatch({
      type: ACTIONS.REMOVE_ONE_FROM_CART,
      payload:{
        prod: product,
        id: id,
        cant: cant,
      }
    });
  };

    const addTotalPrice = (price) => {
    dispatch({
      type: ACTIONS.SUM_PRICE,
      payload: price,
    });
  };

  const substTotalPrice = (price) => {
    dispatch({
      type: ACTIONS.SUBST_PRICE,
      payload: price,
    })
  }

  const addCounter = () => dispatch({type: ACTIONS.ADD_COUNTER, payload: 1});

  const substractCounter = () => dispatch({type: ACTIONS.SUBST_COUNTER, payload: 1});

  const resetCart =() => dispatch({type: ACTIONS.RESET_CART});

  const value = {
    counter: state.counter,
    cart: state.cart,
    totalPrice: state.totalPrice,
    addToCart,
    removeFromCart,
    resetCart,
    addTotalPrice,
    substTotalPrice,
    addCounter,
    substractCounter,
  };

  return (
    <CartContext.Provider value={value}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;