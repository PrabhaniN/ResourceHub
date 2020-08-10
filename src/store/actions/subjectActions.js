import firebase from "../../../firebase";
import "firebase/firestore";
import {
  LOADING,
  SUBJECTS_LOADED,
  SUBJECT_LOADED,
  SUBJECT_ADDED,
  SUBJECT_UPDATED,
  SUBJECT_DELETED,
  SUBJECT_FAILED,
} from "./types";

export const getSubjects = () => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("subjects")
      .get()
      .then((snapshot) => {
        dispatch({ type: SUBJECTS_LOADED, payload: snapshot });
      })
      .catch((error) => {
        dispatch({ type: SUBJECT_FAILED, payload: error });
      });
  };
};

export const getSubject = (id) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("subjects")
      .doc(id)
      .get()
      .then((doc) => {
        dispatch({ type: SUBJECT_LOADED, payload: doc.data() });
      })
      .catch((error) => {
        dispatch({ type: SUBJECT_FAILED, payload: error });
      });
  };
};

export const createSubject = (subject) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("subjects")
      .add(subject)
      .then(() => {
        dispatch({ type: SUBJECT_ADDED });
      })
      .catch((error) => {
        dispatch({ type: SUBJECT_FAILED, payload: error });
      });
  };
};

export const updateSubject = (id, subject) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("subjects")
      .doc(id)
      .set(subject, { merge: true })
      .then(() => {
        dispatch({ type: SUBJECT_UPDATED });
      })
      .catch((error) => {
        dispatch({ type: SUBJECT_FAILED, payload: error });
      });
  };
};

export const deleteSubject = (id) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("subjects")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: SUBJECT_DELETED });
      })
      .catch((error) => {
        dispatch({ type: SUBJECT_FAILED, payload: error });
      });
  };
};
