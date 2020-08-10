import {
  LOADING,
  NOTIFICATION_LOADED,
  NOTIFICATIONS_LOADED,
  NOTIFICATION_ADDED,
  NOTIFICATION_UPDATED,
  NOTIFICATION_DELETED,
  NOTIFICATION_FAILED,
} from "../actions/types";

const initState = {
  notifications: [],
  notification: {},
  isLoading: false,
  error: "",
};

export default notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case NOTIFICATIONS_LOADED:
      let notifications = [];

      action.payload.forEach((doc) => {
        notifications.push({ ...doc.data(), id: doc.id });
      });

      return {
        ...state,
        notifications,
        isLoading: false,
      };

    case NOTIFICATION_LOADED:
      return {
        ...state,
        notification: action.payload,
        isLoading: false,
      };

    case NOTIFICATION_ADDED:
      return state;

    case NOTIFICATION_UPDATED:
      return state;

    case NOTIFICATION_DELETED:
      return state;

    case NOTIFICATION_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
