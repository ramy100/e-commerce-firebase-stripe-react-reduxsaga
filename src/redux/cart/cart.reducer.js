import CartActions from "./cart.action.types";
import { addItem, removeOne } from "./cart.utils";
const INITAIL_STATE = {
  hidden: true,
  cartItems: [],
};
const cartReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case CartActions.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActions.ADD_ITEM:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload),
      };
    case CartActions.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case CartActions.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: removeOne(state.cartItems, action.payload),
      };
    case CartActions.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
