import { all, call, takeLatest, put } from "redux-saga/effects";
import { UserActionTypes } from "../user/user.action.types";
import { clearCart } from "./cart.actions";

function* emptyCart() {
  yield put(clearCart());
}

function* onSignoutsuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, emptyCart);
}

export function* cartSaga() {
  yield all([call(onSignoutsuccess)]);
}
