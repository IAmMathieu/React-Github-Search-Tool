import PropTypes from 'prop-types';
import styles from './styles.scss';

function ResultCard({
  avatar, name, login, description,
}) {
  return (
    <article className={styles.container}>
      <img className={styles.cardImage} src={avatar} alt={name} />
      <div className={styles.cardInfos}>
        <h3>{name}</h3>
        <h5>{login}</h5>
        <p>{description}</p>
      </div>
    </article>
  );
}

ResultCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
}.isRequired;

export default ResultCard;
