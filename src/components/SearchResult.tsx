import { useState } from 'react';
import apiKey from '../apiKey';
import ResultCard from './ResultCard';

const SearchResult = () => {
  const [results, setResults] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [msg, setMsg] = useState('');

  const onSubmit = async (e: any) => {
    e.preventDefault();

    await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${userInput}&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results === undefined) {
          setMsg('Must input a search');
          setResults([]);
        }
        const newResults = data.results || [];
        if (data.results.length === 0) {
          setMsg('Sorry no results');
          setResults([]);
        }
        if (data.results.length > 0) {
          setMsg(`Results for ${userInput}`);
        }
        setResults(newResults);
        setUserInput('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='search'>
      <form action='#' className='searchbar' onSubmit={onSubmit}>
        <input
          type='text'
          name='search'
          placeholder='find your film'
          className='searchbar__input'
          onChange={(event) => setUserInput(event.target.value)}
          value={userInput}
        />
        <input type='submit' value='Search' className='searchbar__submit' />
      </form>
      <div className='results__container'>
        <h3 className='results__message'>{msg}</h3>
      {results.map((result: any, index) => (
        <ResultCard key={index} {...result} />
      ))}
      </div>
    </div>
  );
};

export default SearchResult;
