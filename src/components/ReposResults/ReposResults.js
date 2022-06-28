import PropTypes from 'prop-types';
import ResultCard from '../ResultCard/ResultCard';
import styles from './styles.scss';

function ReposResults({ results }) {
  return (
    <div className={styles.container}>
      {
      results.map((repos) => (
        <ResultCard
          avatar={repos.owner.avatar_url}
          name={repos.name}
          login={repos.login}
          description={repos.description}
        />
      ))
      }
    </div>
  );
}

ReposResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReposResults;
