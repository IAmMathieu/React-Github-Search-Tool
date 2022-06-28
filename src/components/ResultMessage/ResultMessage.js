import PropTypes from 'prop-types';
import styles from './styles.scss';

function ResultMessage({ resultsCount }) {
  return (
    <div className={styles.container}>
      {
      (resultsCount > 0) ? (
        <h4
          className={styles.message}
        >
          La recherche a donné {resultsCount} résultats
        </h4>
      ) : (
        <h4
          className={styles.message}
        >
          La recherche n'a donné aucun résultat
        </h4>
      )
      }

    </div>
  );
}

ResultMessage.propTypes = {
  resultsCount: PropTypes.number.isRequired,
};

export default ResultMessage;
