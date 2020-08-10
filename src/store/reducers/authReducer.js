import {
  LOADING,
  USER_SIGNED_IN,
  USER_SIGNED_OUT,
  USER_FAILED,
} from "../actions/types";

const initState = {
  user: {},
  isLoading: false,
  error: "",
};

export default authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case USER_SIGNED_IN:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };

    case USER_SIGNED_OUT:
      return {
        ...state,
        user: {},
      };

    case USER_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
