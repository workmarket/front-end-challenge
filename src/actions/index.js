import * as types from '../constants';

export const requestRepos = () => {
  return {
    type: types.REQUEST_REPOS,
  };
};

export const receiveRepos = (data) => {
  return {
    type: types.RECEIVE_REPOS,
    repos: data,
  };
};

export const fetchRepoList = () => {
  return (dispatch) => {
    dispatch(requestRepos());

    return fetch('https://api.github.com/orgs/facebook/repos')
      .then(response => response.json())
      .then(json => dispatch(receiveRepos(json)));
  };
};
