const initState = {
  notifications: [],
};

export default notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case "NOTIFICATIONS_LOADED":
      let notifications = [];

      action.payload.forEach((doc) => {
        notifications.push({ ...doc.data(), id: doc.id });
      });

      return {
        ...state,
        notifications,
      };

    default:
      return state;
  }
};
