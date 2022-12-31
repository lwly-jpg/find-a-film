import { useState } from "react";
import apiKey from "../../apiKey";

const DiscoverFields = ({setResults, setMsg}: {setResults: any, setMsg: any}) => {
  const [discoverParams, setDiscoverParams] = useState({
    genre: "",
    rating: "",
    releasedFrom: "",
    releasedBefore: `${new Date().getFullYear()}`,
    provider: "",
  });

  const handleChange = (event: any) => {
    setDiscoverParams((prevDiscoverParams) => {
      return {
        ...prevDiscoverParams,
        [event.target.name]:
          event.target.type === "providers"
            ? event.target.checked
            : event.target.value,
      };
    });
  };

  const handleSubmit = (event: any) => {
    setMsg("");
    event.preventDefault();
    let cancelled = false;
    if (discoverParams.releasedFrom > discoverParams.releasedBefore) {
      setMsg("'Released from' must be an earlier year than 'Released before'");
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&watch_region=GB&language=en-GB&include_adult=false&page=1&with_genres=${discoverParams.genre}&vote_average.gte=${discoverParams.rating}&release_date.gte=${discoverParams.releasedFrom}&release_date.lte=${discoverParams.releasedBefore}&with_release_type=1&with_watch_providers=${discoverParams.provider}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!cancelled) {
          setResults(data.results);
        }
      });

    return () => {
      cancelled = true;
    };
  };

    // generates list of 120 years based on current year
    const generateYears = () => {
      let currentYear = new Date().getFullYear();
      let yearsList = [];
      for (let i = 0; i < 120; i++) {
        yearsList.push(currentYear - i);
      }
      return yearsList;
    };


  return (
    <form className="discover__bar" onSubmit={handleSubmit}>
        <select
          id="genre"
          value={discoverParams.genre}
          onChange={handleChange}
          name="genre"
          className="discover__dropdown"
        >
          <option value="">Genre</option>
          <option value={28}>Action</option>
          <option value={12}>Adventure</option>
          <option value={16}>Animation</option>
          <option value={35}>Comedy</option>
          <option value={80}>Crime</option>
          <option value={99}>Documentary</option>
          <option value={18}>Drama</option>
          <option value={10751}>Family</option>
          <option value={14}>Fantasy</option>
          <option value={36}>History</option>
          <option value={27}>Horror</option>
          <option value={10402}>Music</option>
          <option value={9648}>Mystery</option>
          <option value={10749}>Romance</option>
          <option value={878}>Science Fiction</option>
          <option value={10770}>TV Movie</option>
          <option value={53}>Thriller</option>
          <option value={10752}>War</option>
          <option value={37}>Western</option>
        </select>
        <select
          id="rating"
          value={discoverParams.rating}
          onChange={handleChange}
          name="rating"
          className="discover__dropdown"
        >
          <option value="">Rating</option>
          <option value={9.0}>9+ stars</option>
          <option value={8.0}>8+ stars</option>
          <option value={7.0}>7+ stars</option>
          <option value={6.0}>6+ stars</option>
          <option value={5.0}>5+ stars</option>
          <option value={4.0}>4+ stars</option>
          <option value={3.0}>3+ stars</option>
          <option value={2.0}>2+ stars</option>
          <option value={1.0}>1+ stars</option>
        </select>
        <select
          id="releasedFrom"
          value={discoverParams.releasedFrom}
          onChange={handleChange}
          name="releasedFrom"
          className="discover__dropdown"
        >
          <option value="">Released since</option>
          {generateYears().map((year) => (
            <option key={year} value={`${year}-01-01`}>
              {year}
            </option>
          ))}
        </select>
        <select
          id="releasedBefore"
          value={discoverParams.releasedBefore}
          onChange={handleChange}
          name="releasedBefore"
          className="discover__dropdown"
        >
          <option value="">Released before</option>
          {generateYears().map((year) => (
            <option key={year} value={`${year}-01-01`}>
              {year}
            </option>
          ))}
        </select>
        <select
          id="provider"
          value={discoverParams.provider}
          onChange={handleChange}
          name="provider"
          className="discover__dropdown"
        >
          <option value="">Available on</option>
          <option value={8}>Netflix</option>
          <option value={9}>Prime Video</option>
          <option value={337}>Disney+</option>
          <option value={39}>NOW TV</option>
          <option value={350}>Apple TV Plus</option>
          <option value={531}>Paramount Plus</option>
          <option value={103}>All 4</option>
        </select>
        <button className="sort__button">Discover films</button>
      </form>
  )

}

export default DiscoverFields;