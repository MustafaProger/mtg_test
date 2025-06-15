import { createStore } from "redux";

const initialState = { users: [], currentPage: 1, menuActive: false };

function reducer(state = initialState, action: any) {
	switch (action.type) {
		case "PREVIOUS_PAGE":
			return { ...state, currentPage: Math.max(state.currentPage - 1, 1) };
		case "MENU_ACTIVE":
			return { ...state, menuActive: !state.menuActive };
		case "UPDATE_USERS":
			return { ...state, users: action.payload };
		default:
			return state;
	}
}

const store = createStore(
	reducer,
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
