const initState = {
  notifications: [],
  isLoading: false,
};

export default notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "NOTIFICATIONS_LOADED":
      let notifications = [];

      action.payload.forEach((doc) => {
        notifications.push({ ...doc.data(), id: doc.id });
      });

      return {
        ...state,
        notifications,
        isLoading: false,
      };

    default:
      return state;
  }
};
