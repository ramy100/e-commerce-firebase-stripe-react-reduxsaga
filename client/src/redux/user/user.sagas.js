import { takeLatest, call, all, put } from "redux-saga/effects";
import { UserActionTypes } from "./user.action.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  signInSuccess,
  signInFailuer,
  signOutFailuer,
  signOutSuccess,
  signUpFaliuer,
  signUpSuccess,
} from "./user.actions";

function* getSnapShop(user, additionAdata) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionAdata);
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

function* checkCurrentUserAsync() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapShop(userAuth);
  } catch (error) {
    yield put(signInFailuer(error.meesage));
  }
}

function* signOutUserAsync() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailuer(error.meesage));
  }
}

function* signUpUserAsync({
  payload: {
    emailAndPassword: { email, password },
    additionalData,
  },
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess(user, additionalData));
  } catch (error) {
    yield put(signUpFaliuer(error.message));
  }
}

function* signUpUserSuccessAsync({ payload: { user, additionalData } }) {
  try {
    yield getSnapShop(user, additionalData);
  } catch (error) {
    yield put(signUpFaliuer(error.message));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, GoogleSignInAsync);
}

function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, EmailSignInAsync);
}

function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, checkCurrentUserAsync);
}

function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutUserAsync);
}

function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpUserAsync);
}
function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signUpUserSuccessAsync);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
