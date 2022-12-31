import { useState } from "react";
import "./Results.css";
import ResultCard from "./ResultCard";
import DiscoverFields from "./DiscoverFields";
import SearchBar from "./SearchBar";
const { format } = require("date-fns");
let date = format(new Date(), "yyyy.MM.dd");

const Results = () => {
  const [results, setResults] = useState([]);
  const [msg, setMsg] = useState("");
  const [isSortedYear, setIsSortedYear] = useState(false);
  const [isSortedRating, setIsSortedRating] = useState(false);
  const [prevResults, setPrevResults] = useState<any>();

  const sortByReleaseYear = () => {
    if (isSortedYear === false) {
      setPrevResults(results);
      const sortedResults = [...results].sort(function (o1: any, o2: any) {
        if (o1.release_date > o2.release_date) {
          return -1;
        } else if (o1.release_date < o2.release_date) {
          return 1;
        } else {
          return 0;
        }
      });
      setResults(sortedResults);
      setIsSortedYear(true);
      setIsSortedRating(false);
    } else {
      setIsSortedYear(false);
      setResults(prevResults);
    }
  };

  const sortByRating = () => {
    if (isSortedRating === false) {
      setPrevResults(results);
      const sortedResultsRating = [...results].sort(function (
        o1: any,
        o2: any
      ) {
        if (o1.vote_average > o2.vote_average) {
          return -1;
        } else if (o1.vote_average < o2.vote_average) {
          return 1;
        } else {
          return 0;
        }
      });
      setResults(sortedResultsRating);
      setIsSortedRating(true);
      setIsSortedYear(false);
    } else {
      setIsSortedRating(false);
      setResults(prevResults);
    }
  };

  return (
    <div className="search">
      <DiscoverFields setResults={setResults} setMsg={setMsg} />
      <SearchBar setResults={setResults} setMsg={setMsg} setIsSortedYear={setIsSortedYear} setIsSortedRating={setIsSortedRating}/>
      <h3 className="results__message">{msg}</h3>
      {results.length > 0 && (
        <div className="sort__options">
          <label>
            <strong>Sort by:</strong>
          </label>
          <button className="sort__button" onClick={sortByReleaseYear}>
            {isSortedYear ? "Relevance" : "Release year"}
          </button>
          <button className="sort__button" onClick={sortByRating}>
            {isSortedRating ? "Relevance" : "Rating"}
          </button>
        </div>
      )}
      <div className="results__container">
        {results
          .filter((item: any) => {
            if (item.poster_path !== null && item.release_date < date) {
              return item;
            }
            return null;
          })
          .map((result: any) => (
            <ResultCard key={result.id} {...result} />
          ))}
      </div>
    </div>
  );
};

export default Results;
