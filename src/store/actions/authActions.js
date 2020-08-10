import firebase from "../../../firebase";
import { USER_SIGNED_IN, LOADING, USER_FAILED, USER_SIGNED_OUT } from "./types";

export const signIn = (email, password) => {
  return (dispatch) => {
    dispatch({ type: LOADING });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({ type: USER_SIGNED_IN, payload: user });
      })
      .catch((error) => {
        dispatch({ type: USER_FAILED, payload: error });
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({ type: LOADING });
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: USER_SIGNED_OUT, payload: user });
      })
      .catch((error) => {
        dispatch({ type: USER_FAILED, payload: error });
      });
  };
};
