const initState = {
  resources: [],
};

export default resourceReducer = (state = initState, action) => {
  switch (action.type) {
    case "RESOURCE_LOADED":
      let resources = [];

      action.payload.forEach((doc) => {
        resources.push({ ...doc.data(), id: doc.id });
      });

      return {
        ...state,
        resources,
      };

    default:
      return state;
  }
};
