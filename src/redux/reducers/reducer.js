import { combineReducers } from "redux";
import * as splittedReducers from "./splittedReducers";

const reducer = combineReducers(splittedReducers);

export default reducer;
