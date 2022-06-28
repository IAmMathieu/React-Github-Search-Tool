// == Import
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.scss';
import SearchBar from '../SearchBar/SearchBar';
import ReposResults from '../ReposResults/ReposResults';
import ResultMessage from '../ResultMessage/ResultMessage';
import LoadButton from '../LoadButton/LoadButton';
import logo from '../../assets/images/logo-github.png';

// == Composant
function App() {
  const [inputValue, setInputValue] = useState('');
  const [isResult, setIsResult] = useState(false);
  const [resultsCount, setResultCount] = useState(0);
  const [results, setResults] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const handleInputchange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = () => {
    axios.get('https://api.github.com/search/repositories', {
      params: {
        q: inputValue,
        sort: 'stars',
        order: 'desc',
        page: pageCount,
        per_page: 9,
      },
    }).then((responses) => {
      setResults(responses.data.items);
      setResultCount(responses.data.total_count);
      setIsResult(!isResult);
    }).catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    axios.get('https://api.github.com/search/repositories', {
      params: {
        q: inputValue,
        sort: 'stars',
        order: 'desc',
        page: pageCount,
        per_page: 9,
      },
    }).then((responses) => {
      console.log(responses.data.items);
      const nextResults = [...results, ...responses.data.items];
      setResults(nextResults);
    }).catch((error) => {
      console.error(error);
    });
  }, [pageCount]);

  return (
    <div className={styles.app}>
      <img className={styles.logo} src={logo} alt="Logo Github" />
      <SearchBar
        inputValue={inputValue}
        onInputChange={(e) => {
          handleInputchange(e);
        }}
        onFormSubmit={() => {
          handleFormSubmit();
        }}
      />
      {isResult && <ResultMessage resultsCount={resultsCount} />}
      <ReposResults results={results} />
      {isResult && (
      <LoadButton
        onButtonClick={() => {
          setPageCount(pageCount + 1);
        }}
      />
      )}

    </div>
  );
}

// == Export
export default App;
