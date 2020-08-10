import firebase from "../../../firebase";
import "firebase/firestore";

export const getNotifications = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    firebase
      .firestore()
      .collection("notification")
      .get()
      .then((snapshot) => {
        dispatch({ type: "NOTIFICATIONS_LOADED", payload: snapshot });
      })
      .catch((error) => console.log(error));
  };
};
