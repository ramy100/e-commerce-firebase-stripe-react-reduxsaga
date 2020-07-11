import CartActionTypes from "./cart.action.types";
import CartActions from "./cart.action.types";

export const toggleCartHidden = () => ({
  type: CartActions.TOGGLE_CART_HIDDEN,
});

export const addItemTOCart = (item) => ({
  type: CartActions.ADD_ITEM,
  payload: item,
});
