import { useState } from 'react';
import apiKey from '../apiKey';
import ResultCard from './ResultCard';
// import format from 'date-fns';

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
        {results.filter((item: any) => {
          if (item.poster_path !== null && item.release_date < date ) {
            return item
          } return null
        })
        .sort(function(o1: any,o2: any){
          if (o1.release_date > o2.release_date) {
            return -1;
          } else if(o1.release_date < o2.release_date) {
            return  1;
          } else {
            return  0;
          }
        })
        .map((result: any) => (
          <ResultCard key={result.id} {...result} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;

const { format } = require('date-fns');
let date = format(new Date(), 'yyyy.MM.dd');
