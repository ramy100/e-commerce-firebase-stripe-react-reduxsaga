import CartActions from "./cart.action.types";

export const toggleCartHidden = () => ({
  type: CartActions.TOGGLE_CART_HIDDEN,
});

export const addItemTOCart = (item) => ({
  type: CartActions.ADD_ITEM,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CartActions.REMOVE_ITEM,
  payload: item,
});

export const decreaseItemQuantity = (item) => ({
  type: CartActions.DECREASE_QUANTITY,
  payload: item,
});

export const clearCart = () => ({
  type: CartActions.CLEAR_CART,
});
