import { call, all } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/shop.saga";
import { userSagas } from "./user/user.sagas";
import { cartSaga } from "./cart/cart.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas), call(cartSaga)]);
}
