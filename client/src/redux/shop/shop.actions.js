import ShopActionTypes from "./shop.action.types";

export const fetchCallStart = () => ({
  type: ShopActionTypes.FETCH_CALL_START,
});

export const fetchCallFailuer = (message) => ({
  type: ShopActionTypes.FETCH_CALL_FAILUER,
  payload: message,
});

export const fetchCallSuccess = (collections) => ({
  type: ShopActionTypes.FETCH_CALL_SUCCESS,
  payload: collections,
});
