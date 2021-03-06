import { createStore } from "redux";
import reducer from "./reducers/reducer";

const store = createStore(reducer); //store is created by giving the designed reducer, now its API is usable

export default store;
