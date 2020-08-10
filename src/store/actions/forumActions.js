import firebase from "../../../firebase";
import "firebase/firestore";

export const getForums = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    firebase
      .firestore()
      .collection("forum")
      .get()
      .then((snapshot) => {
        dispatch({ type: "FORUM_LOADED", payload: snapshot });
      })
      .catch((error) => console.log(error));
  };
};
