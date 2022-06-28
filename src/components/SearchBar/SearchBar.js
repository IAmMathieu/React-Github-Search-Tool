import ProptTypes from 'prop-types';
import styles from './styles.scss';

function SearchBar({ inputValue, onInputChange, onFormSubmit }) {
  return (
    <form
      className={styles.container}
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit();
      }}
    >
      <input
        className={styles.input}
        type="text"
        placeholder="Entrez votre recherche"
        value={inputValue}
        onChange={(event) => {
          onInputChange(event);
        }}
      />
    </form>
  );
}

SearchBar.propTypes = {
  inputValue: ProptTypes.string.isRequired,
  onInputChange: ProptTypes.func.isRequired,
  onFormSubmit: ProptTypes.func.isRequired,
};

export default SearchBar;
