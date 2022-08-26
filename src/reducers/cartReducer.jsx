import { ACTIONS } from "../helpers/actions";

export const initialState = {
    cart: [],
    counter: 0,
    totalPrice: 0,
};

const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case ACTIONS.ADD_TO_CART:
            console.log('ADD_TO_CART', payload);
            return {
                ...state,
                cart: payload.cart,
            };
        case ACTIONS.REMOVE_ONE_FROM_CART:
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
        case ACTIONS.SUM_PRICE:
            return {
                ...state,
                totalPrice: state.totalPrice + payload,
            };
        case ACTIONS.SUBST_PRICE:
            return {
                ...state,
                totalPrice: state.totalPrice - payload,
            }
        case ACTIONS.ADD_COUNTER:
            return { ...state, counter: state.counter + payload };
        case ACTIONS.SUBST_COUNTER:
            return { ...state, counter: state.counter - payload };
        case ACTIONS.RESET_CART:
            return initialState;
        default:
            state;
    }
}

export default cartReducer;