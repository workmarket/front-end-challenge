import { combineReducers } from 'redux';
import * as types from '../constants';
// import {
// 	RepoList,
// } from '../models';

// const initialState = new RepoList();
const initialState = {
  isFetching: false,
  data: [],
  showError: false,
};

const repoList = (state = initialState, action) => {
  switch (action.type) {
  case types.REQUEST_REPOS:
    return Object.assign({}, state, {
      isFetching: true,
    });
  case types.RECEIVE_REPOS:
    return Object.assign({}, state, {
      isFetching: false,
      showError: false,
      data: action.repos,
    });
  case types.RECEIVE_ERROR:
    return Object.assign({}, state, {
      isFetching: false,
      showError: true,
      data: initialState.data,
    });
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  repoList,
});

export default rootReducer;
