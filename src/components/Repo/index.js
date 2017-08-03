import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Contributors from './Contributors';
import { toHumanTime } from '../../utils';
import styles from './Repos.scss';

class Repo extends Component {
  static propTypes = {
    data: PropTypes.shape({
      contributors_url: PropTypes.string,
    }),
  };

  state = {
    contributors: [],
    contributorsError: false,
    loadingContributors: false,
  };

  componentDidMount = () => {
    const { data } = this.props;
    const contributors = this.state;

    if (!contributors.length && data.contributors_url) {
      this.fetchContributors(data.contributors_url);
    }
  }

  fetchContributors = (url) => {
    if (url && url.length /* === 'https://api.github.com/repos/facebook/codemod/contributors' */) {
      this.setState(() => ({ loadingContributors: true }));

      fetch(url, {
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
        if (status >= 400) this.setState({ contributorsError: true });
        else this.setState({ contributorsError: false, contributors: json });
      });

      this.setState(() => ({ loadingContributors: false }));
    }
  }

  render = () => {
    const { data } = this.props;
    const { contributors, contributorsError, loadingContributors } = this.state;
    console.log(this.state.loadingContributors);

    return (
      <div className={styles.card}>
        <div className={styles.name}>
          <a href={data.html_url}><span>{data.name}</span></a>
        </div>
        <div className={styles.updated}>
          <span>Updated {toHumanTime(data.updated_at)}</span>
        </div>
        {
          loadingContributors ?
            <span>Loading contributors...</span>
            :
            <Contributors contributors={contributors} error={contributorsError} />
        }
        <div className={styles.stars}>
          <span>{data.stargazers_count} Stars</span>
        </div>
        <div className={styles.forks}>
          <span>{data.forks} Forks</span>
        </div>
      </div>
    );
  }
}

export default Repo;
