import { createStore } from "redux";

const initialState = { reviews: [], currentPage: 1, menuActive: false };

function reducer(state = initialState, action: any) {
	switch (action.type) {
		case "PREVIOUS_PAGE":
			return { ...state, currentPage: Math.max(state.currentPage - 1, 1) };
		case "MENU_ACTIVE":
			return { ...state, menuActive: !state.menuActive };
		default:
			return state;
	}
}

const store = createStore(reducer);

export default store;
