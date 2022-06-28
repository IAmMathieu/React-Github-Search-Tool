// == Import
import { useState } from 'react';
import axios from 'axios';
import styles from './styles.scss';
import SearchBar from '../SearchBar/SearchBar';
import ReposResults from '../ReposResults/ReposResults';
import ResultMessage from '../ResultMessage/ResultMessage';
import logo from '../../assets/images/logo-github.png';

// == Composant
function App() {
  const [inputValue, setInputValue] = useState('');
  const [isResult, setIsResult] = useState(false);
  const [resultsCount, setResultCount] = useState(0);
  const [results, setResults] = useState([]);

  const handleInputchange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (searchString) => {
    axios.get('https://api.github.com/search/repositories', {
      params: {
        q: searchString,
      },
    }).then((responses) => {
      setResults(responses.data.items);
      setResultCount(responses.data.total_count);
      setIsResult(!isResult);
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className={styles.app}>
      <img className={styles.logo} src={logo} alt="Logo Github" />
      <SearchBar
        inputValue={inputValue}
        onInputChange={(e) => {
          handleInputchange(e);
        }}
        onFormSubmit={() => {
          handleFormSubmit(inputValue);
        }}
      />
      {isResult && <ResultMessage resultsCount={resultsCount} />}
      <ReposResults results={results} />
    </div>
  );
}

// == Export
export default App;
