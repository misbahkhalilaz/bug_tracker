import * as actions from "./actionTypes";
let lastId = 0;

export default function reducer(state = [], action) {
	//state is current state of the application provided bt the store.
	//Action is the object containing a type value defining the action type
	//and a payload of data corresponding to that action.
	switch (action.type) {
		//here we're calculating the new state according to previous state and current action,
		//current state will not be mutated only new updated state will be returned to the store.
		case actions.BUG_ADDED:
			if (action.payload.description === "") return state;
			return [
				...state, //adding current states.
				{
					// including new state to the array
					id: ++lastId,
					description: action.payload.description,
					resolved: false,
				},
			];

		case actions.BUG_REMOVED:
			return state.filter((bug) => bug.id !== action.payload.id);

		case actions.BUG_RESOLVED:
			return state.map((bug) =>
				bug.id !== action.payload.id ? bug : { ...bug, resolved: !bug.resolved }
			);

		default:
			return state; //must return the current state if none of the action type is mached
	}
}
