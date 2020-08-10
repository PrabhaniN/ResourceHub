import firebase from "../../../firebase";
import "firebase/firestore";
import {
  LOADING,
  RESOURCE_UPDATED,
  RESOURCE_ADDED,
  RESOURCE_DELETED,
} from "./types";

export const createResource = (id, newResource) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("subjects")
      .doc(id)
      .get()
      .then((doc) => {
        const { name, code, resources } = doc.data();
        resources.push(newResource);
        firebase
          .firestore()
          .collection("subjects")
          .doc(id)
          .set({
            name: name,
            code: code,
            resources: resources,
          })
          .then(() => {
            dispatch({ type: RESOURCE_ADDED });
          });
      });
  };
};

export const updateResource = (id, resourceId, newResource) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("subjects")
      .doc(id)
      .get()
      .then((doc) => {
        const { name, code, resources } = doc.data();
        resources[resourceId] = newResource;
        firebase
          .firestore()
          .collection("subjects")
          .doc(id)
          .set({
            name: name,
            code: code,
            resources: resources,
          })
          .then(() => {
            dispatch({ type: RESOURCE_UPDATED });
          });
      });
  };
};
export const deleteResource = (id, resourceId) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("subjects")
      .doc(id)
      .get()
      .then((doc) => {
        const { name, code, resources } = doc.data();
        resources.splice(resourceId, resourceId);
        firebase
          .firestore()
          .collection("subjects")
          .doc(id)
          .set({
            name: name,
            code: code,
            resources: resources,
          })
          .then(() => {
            dispatch({ type: RESOURCE_DELETED });
          });
      });
  };
};
