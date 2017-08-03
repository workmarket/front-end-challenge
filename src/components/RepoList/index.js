import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Repo from '../Repo';
import * as actions from '../../actions';
import styles from './RepoList.scss';

class RepoList extends Component {
  static propTypes = {
    fetchRepoList: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    showError: PropTypes.bool.isRequired,
    repoList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  componentDidMount() {
    const { repoList, fetchRepoList } = this.props;

    if (!repoList.data && !repoList.isFetching) fetchRepoList();
  }

  render = () => {
    const { isFetching, repoList, showError } = this.props;

    if (showError) return (<div>An error occured fetching the repos from GitHub.</div>);
    return isFetching ? (
      <div>Loading repos from GitHub...</div>
    )
    : (
      <div className={styles.list}>
        {repoList.map(repo => <Repo key={repo.id} data={repo} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { repoList } = state;
  return {
    repoList: repoList.data,
    isFetching: repoList.isFetching,
    showError: repoList.showError,
  };
};
const mapDispatchToProps = dispatch => ({
  fetchRepoList: () => dispatch(actions.fetchRepoList()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(RepoList);
