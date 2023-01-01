import { useState } from "react";
import apiKey from "../../apiKey";

const SearchBar = ({setResults, setMsg, setIsSortedYear, setIsSortedRating}: {setResults: any, setMsg: any, setIsSortedYear: any, setIsSortedRating: any}) => {
    const [userInput, setUserInput] = useState("");

    const onSubmit = (e: any) => {
    e.preventDefault();

    // API requires at least one character
    if (!userInput) {
      setMsg("Must input a search");
      setResults([]);
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${userInput}&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setIsSortedYear(false); // search results initially un-sorted by Year
        setIsSortedRating(false); // search results initially un-sorted by Rating

        // no results returns nothing
        // need empty array to avoid errors
        const newResults = data.results || [];
        if (data.results.length === 0) {
          setMsg("Sorry no results");
          setResults([]);
        }
        if (data.results.length > 0) {
          setMsg(`Results for ${userInput}`);
        }
        setResults(newResults);
        setUserInput("");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <form action="#" className="searchbar" onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search by film title (e.g. James Bond"
          className="searchbar__input"
          onChange={(event) => setUserInput(event.target.value)}
          value={userInput}
        />
        <button className="searchbar__submit">Search</button>
      </form>
  )

}

export default SearchBar;