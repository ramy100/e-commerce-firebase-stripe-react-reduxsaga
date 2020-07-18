import { call, put, takeLatest } from "redux-saga/effects";
import ShopActionTypes from "./shop.action.types";
import {
  firestore,
  convertCollectionsSnaphotToMap,
} from "../../firebase/firebase.utils";
import { fetchCallFailuer, fetchCallSuccess } from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnaphotToMap, snapshot);
    yield put(fetchCallSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCallFailuer(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_CALL_START, fetchCollectionsAsync);
}
