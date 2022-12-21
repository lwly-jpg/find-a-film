import { useState } from 'react';
import apiKey from '../apiKey';

const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [userInput, setUserInput] = useState('');

  const onSubmit = async (e: any) => {
    e.preventDefault();

    await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${userInput}&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);

        setResults(data.results);
        setUserInput('');
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
          value={userInput}
        />
        <input type='submit' value='Search' className='searchbar__submit' />
      </form>

      <h3>Results</h3>
      {results.length === 0
        ? 'Sorry no matches'
        : results.map((element: any) => (
            <div key={element.id}>{element.title}</div>
          ))}
    </div>
  );
};

export default SearchBar;
