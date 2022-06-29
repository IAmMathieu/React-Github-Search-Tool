// == Import
import { useEffect, useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import styles from './styles.scss';
import SearchBar from '../SearchBar/SearchBar';
import ReposResults from '../ReposResults/ReposResults';
import ResultMessage from '../ResultMessage/ResultMessage';
import LoadButton from '../LoadButton/LoadButton';
import Faq from '../Faq/Faq';
import NotFound from '../NotFound/NotFound';
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
    if (pageCount > 1) {
      axios.get('https://api.github.com/search/repositories', {
        params: {
          q: inputValue,
          sort: 'stars',
          order: 'desc',
          page: pageCount,
          per_page: 9,
        },
      }).then((responses) => {
        const nextResults = [...results, ...responses.data.items];
        setResults(nextResults);
      }).catch((error) => {
        console.error(error);
      });
    }
  }, [pageCount, inputValue]);

  return (
    <div className={styles.app}>
      <img className={styles.logo} src={logo} alt="Logo Github" />
      <nav className={styles.navigation}>
        <NavLink className={styles.navigation_item} to="/">Rechercher</NavLink>
        <NavLink className={styles.navigation_item} to="/Faq">Faq</NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={(
            <>
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
            </>
          )}
        />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
