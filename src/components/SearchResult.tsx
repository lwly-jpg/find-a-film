import { useState } from 'react';
import apiKey from '../apiKey';
import ResultCard from './ResultCard';

const SearchResult = () => {
  const [results, setResults] = useState([]);
  const [userInput, setUserInput] = useState('');

  const onSubmit = async (e: any) => {
    e.preventDefault();

    await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${userInput}&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
      });
  };

  return (
    <div>
      <form action='#' className='searchbar' onSubmit={onSubmit}>
        <input
          type='text'
          name='search'
          placeholder='find your film'
          className='searchbar__input'
          onChange={(event) => setUserInput(event.target.value)}
        />
        <input type='submit' value='Search' className='searchbar__submit' />
      </form>
      {results.map((result: any) => (
         <ResultCard {...result} /> 
      ))}
    </div>
  );
};

export default SearchResult;