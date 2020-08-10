import { combineReducers } from "redux";
import subjectReducer from "./subjectReducer";
import forumReducer from "./forumReducer";
import notificationReducer from "./notificationReducer";
import authReducer from "./authReducer";
import resourceReducer from "./resourceReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  subject: subjectReducer,
  forum: forumReducer,
  notification: notificationReducer,
});

export default rootReducer;
