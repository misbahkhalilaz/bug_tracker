//create and return action objects here
import * as actions from "./actionTypes";

export const bugAdded = (description) => ({
	//return an action object
	type: actions.BUG_ADDED,
	payload: {
		description, //shorthand for description: "description"
	},
});

export const bugRemoved = (id) => ({
	type: actions.BUG_REMOVED,
	payload: {
		id,
	},
});

export const bugResolved = (id) => ({
	type: actions.BUG_RESOLVED,
	payload: {
		id,
	},
});

export const changeFilter = (visibilityFilter) => ({
	type: actions.CHANGE_FILTER,
	payload: {
		visibilityFilter,
	},
});
