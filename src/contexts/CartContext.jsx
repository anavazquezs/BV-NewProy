import { createContext, useReducer } from "react";
import { ACTIONS } from "../helpers/actions";
import cartReducer, { initialState } from "../reducers/cartReducer";

export const CartContext = createContext(); //Usa createContext y se exporta (muy importante)

const CartContextProvider = (props) => {

  //Recibe estado y dispatch de reducer. Se creó un hook customizado useReducer
  const [ state, dispatch ] = useReducer(cartReducer, initialState);

  //En el contexto se crean las funciones y el estado para proveer a todos los componentes del proyecto

  //Función para agregar un producto al carrito
  const addToCart = (product) => {
    const updatedCart = state.cart.concat(product);
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: {
        cart: updatedCart,
      }
    })
    };

  //Función para remover un producto del carrito
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

  //Función para sumar precio total en la compra
    const addTotalPrice = (price) => {
    dispatch({
      type: ACTIONS.SUM_PRICE,
      payload: price,
    });
  };

  //Función para restar los precios de los productos que se eliminan del carrito
  const substTotalPrice = (price) => {
    dispatch({
      type: ACTIONS.SUBST_PRICE,
      payload: price,
    })
  }

  //Funciones para cambiar el contador
  const addCounter = () => dispatch({type: ACTIONS.ADD_COUNTER, payload: 1});

  const substractCounter = () => dispatch({type: ACTIONS.SUBST_COUNTER, payload: 1});

  //Función para resetear el carrito
  const resetCart =() => dispatch({type: ACTIONS.RESET_CART});

  /* Como value en el provider sólo acepta 1 elemento, se crea un objeto con todo lo que debe proveer el contexto (contador, carrito, precio total y todas las funciones que cambian los estados) */

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