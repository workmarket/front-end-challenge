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

export const receiveError = () => {
  return {
    type: types.RECEIVE_ERROR,
  };
};

export const fetchRepoList = () => {
  return (dispatch) => {
    dispatch(requestRepos());

    return fetch('https://api.github.com/orgs/facebook/repos', {
      headers: new Headers({
        Authorization: `token ${'465778a84ba5d83e5e37aac5378a4cbdb7f05b0a'}`,
      }),
    })
      .then(response =>
        response.json().then(json => ({
          status: response.status,
          json,
        }),
      ))
      .then(({ status, json }) => {
        if (status >= 400) return dispatch(receiveError());
        return dispatch(receiveRepos(json));
      });
  };
};
