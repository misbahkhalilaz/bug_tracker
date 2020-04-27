import { combineReducers } from "redux";
import visibilityReducer from "./visibilityReducer";
import bugsReducer from "./bugsReducer";

const reducer = combineReducers({
	visibilityFilter: visibilityReducer,
	bugs: bugsReducer,
});

export default reducer;
