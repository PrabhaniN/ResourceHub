import {
  LOADING,
  FORUM_LOADED,
  FORUMS_LOADED,
  FORUM_ADDED,
  FORUM_UPDATED,
  FORUM_DELETED,
  FORUM_FAILED,
} from "../actions/types";

const initState = {
  forums: [],
  forum: {},
  isLoading: false,
  error: "",
};

export default forumReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case FORUMS_LOADED:
      let forums = [];

      action.payload.forEach((doc) => {
        forums.push({ ...doc.data(), id: doc.id });
      });

      return {
        ...state,
        forums,
        isLoading: false,
      };

    case FORUM_LOADED:
      return {
        ...state,
        forum: action.payload,
        isLoading: false,
      };

    case FORUM_ADDED:
      return state;

    case FORUM_UPDATED:
      return state;

    case FORUM_DELETED:
      return state;

    case FORUM_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
