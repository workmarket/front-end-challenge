import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class RepoList extends Component {
  static propTypes = {
    fetchRepoList: PropTypes.func.isRequired,
    repoList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  componentDidMount() {
    const { repoList, fetchRepoList } = this.props;

    if (!repoList.data && !repoList.isFetching) fetchRepoList();
  }

  render = () => {
    return (
      <div>fetch repos</div>
    );
  }
}

const mapStateToProps = (state) => {
  const { repoList } = state;
  return {
    repoList: repoList.data,
    isFetching: repoList.isFetching,
  };
};
const mapDispatchToProps = dispatch => ({
  fetchRepoList: () => dispatch(actions.fetchRepoList()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(RepoList);
