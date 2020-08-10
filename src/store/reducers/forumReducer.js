const initState = {
  forums: [],
  isLoading: false,
};

export default forumReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "FORUM_LOADED":
      let forums = [];

      action.payload.forEach((doc) => {
        forums.push({ ...doc.data(), id: doc.id });
      });

      return {
        ...state,
        forums,
        isLoading: false,
      };

    default:
      return state;
  }
};
