import { UserActionTypes } from "./user.action.types";

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});
export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});
export const signInFailuer = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILUER,
  payload: error,
});
export const EmailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const SignOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailuer = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILUER,
  payload: error,
});

export const signUpStart = (emailAndPassword, additionalData) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: { emailAndPassword, additionalData },
});
export const signUpSuccess = (user, additionalData) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});
export const signUpFaliuer = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILUER,
  payload: error,
});
