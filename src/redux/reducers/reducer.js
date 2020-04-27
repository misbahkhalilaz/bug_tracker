import * as actions from "../actionTypes";
let lastId = 0;

const initState = {
	//this is the final shape of our states in store
	visibilityFilter: actions.visibilityFilters.SHOW_ALL,
	bugs: [
		// {
		// 	id: null,
		// 	description: "",
		// 	resolved: false,
		// },
	],
};

export default function reducer(state = initState, action) {
	//state is current state of the application provided bt the store.
	//Action is the object containing a type value defining the action type
	//and a payload of data corresponding to that action.
	switch (action.type) {
		//here we're calculating the new state according to previous state and current action,
		//current state will not be mutated only new updated state will be returned to the store.
		case actions.BUG_ADDED:
			if (action.payload.description === "") return state;

			return Object.assign({}, state, {
				bugs: [
					...state.bugs, //current bugs array added
					{
						// new bug to the array added
						id: ++lastId,
						description: action.payload.description,
						resolved: false,
					},
				],
			});

		case actions.BUG_REMOVED:
			return Object.assign({}, state, {
				bugs: state.bugs.filter((bug) => bug.id !== action.payload.id),
			});

		case actions.BUG_RESOLVED:
			return Object.assign({}, state, {
				bugs: state.bugs.map((bug) =>
					bug.id !== action.payload.id
						? bug
						: { ...bug, resolved: !bug.resolved }
				),
			});

		case actions.CHANGE_FILTER:
			return Object.assign({}, state, {
				visibilityFilter: action.payload.visibilityFilter,
			});

		default:
			return state; //must return the current state if none of the action type is mached
	}
}
