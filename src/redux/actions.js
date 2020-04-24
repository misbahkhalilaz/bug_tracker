//create and return action objects here
import * as actions from "./actionTypes";

//{final shape of the state
// 	// including new state to the array
// 	id: num,
// 	description: action.payload.description,
// 	resolved: false,
// },

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
