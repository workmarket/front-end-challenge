import { combineReducers } from 'redux';
// import * as types from '../constants';
// import {
// 	Person,
// } from '../models';

// const initialUserState = new Person();

const emptyReducer = (state = '', {
	type,
	/* value, */
}) => {
	switch (type) {
	// case types.CHANGE_FIELD:
	// 	return value;
	default:
		return state;
	}
};

const rootReducer = combineReducers({
	emptyReducer,
});

export default rootReducer;
