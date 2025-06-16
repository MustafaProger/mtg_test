import { createStore } from "redux";

const initialState = {
	users: {},
	currentPage: 1,
	menuActive: false,
};

function reducer(state = initialState, action: any) {
	switch (action.type) {
		case "UPDATE_USERS":
			return { ...state, users: action.payload };
		case "SET_CURRENT_PAGE":
			return { ...state, currentPage: action.payload };
		case "MENU_ACTIVE":
			return { ...state, menuActive: !state.menuActive };
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
