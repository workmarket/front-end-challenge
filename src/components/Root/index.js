import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import RepoList from '../RepoList';

const Root = ({ store }) => (
  <Provider store={store}>
    <RepoList />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Root;
