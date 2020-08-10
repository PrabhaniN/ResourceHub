import { combineReducers } from "redux";
import subjectReducer from "./subjectReducer";
import forumReducer from "./forumReducer";
import notificationReducer from "./notificationReducer";
import resourceReducer from "./resourceReducer";

const rootReducer = combineReducers({
  subject: subjectReducer,
  forum: forumReducer,
});

export default rootReducer;
