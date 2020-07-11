import CartActions from "./cart.action.types";
import { addItem } from "./cart.utils";
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
    default:
      return state;
  }
};

export default cartReducer;
