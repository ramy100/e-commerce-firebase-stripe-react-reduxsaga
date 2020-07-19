import { takeLatest, call, all, put } from "redux-saga/effects";
import { UserActionTypes } from "./user.action.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";
import { signInSuccess, signInFailuer } from "./user.actions";

function* getSnapShop(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailuer(error.message));
  }
}

function* GoogleSignInAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShop(user);
  } catch (error) {
    yield put(signInFailuer(error.message));
  }
}

function* EmailSignInAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShop(user);
  } catch (error) {
    yield put(signInFailuer(error.message));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, GoogleSignInAsync);
}

function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, EmailSignInAsync);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
