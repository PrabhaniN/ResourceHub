import firebase from "../../../firebase";
import "firebase/firestore";

import {
  LOADING,
  NOTIFICATIONS_LOADED,
  NOTIFICATION_LOADED,
  NOTIFICATION_ADDED,
  NOTIFICATION_UPDATED,
  NOTIFICATION_DELETED,
  NOTIFICATION_FAILED,
} from "./types";

export const getNotifications = () => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("notifications")
      .get()
      .then((snapshot) => {
        dispatch({ type: NOTIFICATIONS_LOADED, payload: snapshot });
      })
      .catch((error) => {
        dispatch({ type: NOTIFICATION_FAILED, payload: error });
      });
  };
};

export const getNotification = (id) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("notifications")
      .doc(id)
      .get()
      .then((doc) => {
        dispatch({ type: NOTIFICATION_LOADED, payload: doc.data() });
      })
      .catch((error) => {
        dispatch({ type: NOTIFICATION_FAILED, payload: error });
      });
  };
};

export const createNotification = (notification) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("notifications")
      .add(notification)
      .then(() => {
        dispatch({ type: NOTIFICATION_ADDED });
      })
      .catch((error) => {
        dispatch({ type: NOTIFICATION_FAILED, payload: error });
      });
  };
};

export const updateNotification = (id, notification) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("notifications")
      .doc(id)
      .set(notification, { merge: true })
      .then(() => {
        dispatch({ type: NOTIFICATION_UPDATED });
      })
      .catch((error) => {
        dispatch({ type: NOTIFICATION_FAILED, payload: error });
      });
  };
};

export const deleteNotification = (id) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase
      .firestore()
      .collection("notifications")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: NOTIFICATION_DELETED });
      })
      .catch((error) => {
        dispatch({ type: NOTIFICATION_FAILED, payload: error });
      });
  };
};
