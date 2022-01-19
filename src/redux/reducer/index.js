import { combineReducers } from "redux";
import todos from "./todos";
import Filter from "./Filter";

export default combineReducers({
  todos,
  Filter
});