import ShopActionTypes from "./shop.action.types";
const INITIAL_STATE = {
  collections: null,
  isFetching: true,
  Message: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_CALL_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_CALL_FAILUER:
      return {
        ...state,
        isFetching: false,
        Message: action.payload,
      };
    case ShopActionTypes.FETCH_CALL_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
export default shopReducer;
