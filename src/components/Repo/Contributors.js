import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Repos.scss';

const Contributors = ({ contributors, error }) => {
  if (error) {
    return <div className={styles.contributors}><span>Unable to retrieve contributors.</span></div>;
  }

  return contributors.length ? (
    <div className={styles.contributors}>
      <h5 className={styles.contrivutorsTitle}>Contributors</h5>
      <div>
        {
          contributors.map((contributor, index, list) => (
            <span key={contributor.id}>
              {contributor.login}{(index + 1) !== list.length && ', '}
            </span>
          ))
        }
      </div>
    </div>
  ) : null;
};

Contributors.propTypes = {
  contributors: PropTypes.arrayOf(PropTypes.shape({})),
  error: PropTypes.bool,
};

export default Contributors;
