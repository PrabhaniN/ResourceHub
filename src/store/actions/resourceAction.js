import firebase from "../../../firebase";
import "firebase/firestore";

export const createResource = (id, newResource) => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("subjects")
      .doc(id)
      .get()
      .then((doc) => {
        const { name, code, resources } = doc.data();
        resources.push(newResource);
        firebase.firestore().collection("subjects").doc(id).set({
          name: name,
          code: code,
          resources: resources,
        });
      });
  };
};

export const updateResource = () => {};
export const deleteResource = () => {};
