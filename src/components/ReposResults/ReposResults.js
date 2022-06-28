import PropTypes from 'prop-types';
import ResultCard from '../ResultCard/ResultCard';
import styles from './styles.scss';

function ReposResults({ results }) {
  return (
    <div className={styles.container}>
      {
      results.map((repos) => (
        <ResultCard
          key={repos.id}
          avatar={repos.owner.avatar_url}
          name={repos.name}
          login={repos.owner.login}
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
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReposResults;
