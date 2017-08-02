import { combineReducers } from 'redux';
import * as types from '../constants';
// import {
// 	RepoList,
// } from '../models';

// const initialState = new RepoList();
const initialState = {
  isFetching: false,
  data: [],
};

const repoList = (state = initialState, action) => {
  // console.log(state);
  // console.log(action);
  switch (action.type) {
  case types.RECEIVE_REPOS:
    return Object.assign({}, state, {
      isFetching: false,
      data: action.repos,
    });
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  repoList,
});

export default rootReducer;
