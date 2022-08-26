import { ACTIONS } from "../helpers/actions";

//Objeto con el estado inicial de carrito, contador y precio total

export const initialState = {
    cart: [],
    counter: 0,
    totalPrice: 0,
};

//Reducer recibe el estado y la acción que debe hacer (se lo manda el componente a través del contexto)

const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case ACTIONS.ADD_TO_CART: //Agregar producto al carrito
            console.log('ADD_TO_CART', payload);
            return {
                ...state,
                cart: payload.cart,
            };
        case ACTIONS.REMOVE_ONE_FROM_CART: //Eliminar un producto del carrito
            console.log('REMOVE_ONE_FROM_CART', payload);
            let itemToRemove = state.cart.find((item) => item.id === payload.id);
            return itemToRemove.cant > 1 ? {
                ...state,
                cart: state.cart.map((item) => item.id === payload.id ? {
                    ...item, cant: item.cant - 1
                } : item)
            } : {
                ...state,
                cart: state.cart.filter(item => item.id !== payload.id)            
            };  
        case ACTIONS.SUM_PRICE: //Sumar al precio total
            return {
                ...state,
                totalPrice: state.totalPrice + payload,
            };
        case ACTIONS.SUBST_PRICE: //Restar al precio total
            return {
                ...state,
                totalPrice: state.totalPrice - payload,
            }
        case ACTIONS.ADD_COUNTER: //Sumar al contador
            return { ...state, counter: state.counter + payload };
        case ACTIONS.SUBST_COUNTER: //Restar al contador
            return { ...state, counter: state.counter - payload };
        case ACTIONS.RESET_CART: //Resetear carrito
            return initialState;
        default:
            state;
    }
}

export default cartReducer;