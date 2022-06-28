import PropTypes from 'prop-types';
import styles from './styles.scss';

function LoadButton({ onButtonClick }) {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={onButtonClick}
    >
      Load More Results
    </button>
  );
}

LoadButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default LoadButton;
