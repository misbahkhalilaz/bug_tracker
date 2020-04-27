import * as actions from "../actionTypes";
let lastId = 0;

export default function bugsReducer(state = [], action) {
	switch (action.type) {
		case actions.BUG_ADDED:
			if (action.payload.description === "") return state;
			return [
				...state,
				{
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
			return state;
	}
}
