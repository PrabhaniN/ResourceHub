import {
  LOADING,
  RESOURCES_LOADED,
  RESOURCE_LOADED,
  RESOURCE_ADDED,
  RESOURCE_UPDATED,
  RESOURCE_DELETED,
  RESOURCE_FAILED,
} from "../actions/types";

const initState = {
  resources: [],
  resource: {},
  isLoading: false,
  error: "",
};

export default resourceReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case RESOURCES_LOADED:
      let resources = [];

      action.payload.forEach((doc) => {
        resources.push({ ...doc.data(), id: doc.id });
      });

      return {
        ...state,
        resources,
      };

    case RESOURCE_LOADED:
      return {
        ...state,
        resource: action.payload,
        isLoading: false,
      };

    case RESOURCE_ADDED:
      return state;

    case RESOURCE_UPDATED:
      return state;

    case RESOURCE_DELETED:
      return state;

    case RESOURCE_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
