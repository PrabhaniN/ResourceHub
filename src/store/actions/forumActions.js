import firebase from "../../../firebase";
import "firebase/firestore";

import {
  LOADING,
  FORUMS_LOADED,
  FORUM_LOADED,
  FORUM_ADDED,
  FORUM_UPDATED,
  FORUM_DELETED,
  FORUM_FAILED,
} from "./types";

export const getForums = () => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("forums")
      .get()
      .then((snapshot) => {
        dispatch({ type: FORUMS_LOADED, payload: snapshot });
      })
      .catch((error) => {
        dispatch({ type: FORUM_FAILED, payload: error });
      });
  };
};

export const getForum = (id) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("forums")
      .doc(id)
      .get()
      .then((doc) => {
        dispatch({ type: FORUM_LOADED, payload: doc.data() });
      })
      .catch((error) => {
        dispatch({ type: FORUM_FAILED, payload: error });
      });
  };
};

export const createForum = (forum) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("forums")
      .add(forum)
      .then(() => {
        dispatch({ type: FORUM_ADDED });
      })
      .catch((error) => {
        dispatch({ type: FORUM_FAILED, payload: error });
      });
  };
};

export const updateForum = (id, forum) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("forums")
      .doc(id)
      .set(forum, { merge: true })
      .then(() => {
        dispatch({ type: FORUM_UPDATED });
      })
      .catch((error) => {
        dispatch({ type: FORUM_FAILED, payload: error });
      });
  };
};

export const deleteForum = (id) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("forums")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: FORUM_DELETED });
      })
      .catch((error) => {
        dispatch({ type: FORUM_FAILED, payload: error });
      });
  };
};
