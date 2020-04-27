import { CHANGE_FILTER, visibilityFilters } from "../actionTypes";

export default function visibilityReducer(
	state = visibilityFilters.SHOW_ALL,
	action
) {
	if (action.type === CHANGE_FILTER) return action.payload.visibilityFilter;
	else return state;
}
