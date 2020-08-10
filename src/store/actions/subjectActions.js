import firebase from "../../../firebase";
import "firebase/firestore";

export const getSubjects = () => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("subjects")
      .get()
      .then((snapshot) => {
        dispatch({ type: "SUBJECT_LOADED", payload: snapshot });
      })
      .catch((error) => console.log(error));
  };
};
