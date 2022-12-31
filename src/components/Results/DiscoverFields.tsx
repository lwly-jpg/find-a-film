import { useState } from "react";
import apiKey from "../../apiKey";
import Select from 'react-select';

const DiscoverFields = ({setResults, setMsg}: {setResults: any, setMsg: any}) => {
  const [discoverParams, setDiscoverParams] = useState({
    rating: "",
    releasedFrom: "",
    releasedBefore: `${new Date().getFullYear()}`
  });

  const [providerSelection, setProviderSelection] = useState<any>([]);
  const [genreSelection, setGenreSelection] = useState<any>([]);

  // Options for watch provider multi-select dropdown
  const providerOptions = [
    {value: 8, label: 'Netflix'},
    {value: 9, label: 'Prime Video'},
    {value: 337, label: 'Disney+'},
    {value: 39, label: 'NOW TV'},
    {value: 350, label: 'Apple TV Plus'},
    {value: 531, label: 'Paramount Plus'},
    {value: 103, label: 'All 4'}
  ];

  // Options for genre multi-select dropdown
  const genreOptions = [
    {value: 28, label: 'Action'},
    {value: 12, label: 'Adventure'},
    {value: 16, label: 'Animation'},
    {value: 35, label: 'Comedy'},
    {value: 80, label: 'Crime'},
    {value: 99, label: 'Documentary'},
    {value: 18, label: 'Drama'},
    {value: 10751, label: 'Family'},
    {value: 14, label: 'Fantasy'},
    {value: 36, label: 'History'},
    {value: 27, label: 'Horror'},
    {value: 10402, label: 'Music'},
    {value: 9648, label: 'Mystery'},
    {value: 10749, label: 'Romance'},
    {value: 878, label: 'Science Fiction'},
    {value: 10770, label: 'TV Movie'},
    {value: 53, label: 'Thriller'},
    {value: 10752, label: 'War'},
    {value: 37, label: 'Western'}
  ];

  const handleChange = (event: any) => {
    setDiscoverParams((prevDiscoverParams) => {
      return {
        ...prevDiscoverParams,
        [event.target.name]: event.target.value
      };
    });
  };

  // Generates formatted genre or provider options for API parameter
  const generateOptions = (selection: any) => {
    const options = selection.map((item: any) => item.value);
    return options.join("|");
  };

  const handleSubmit = (event: any) => {
    setMsg("");
    event.preventDefault();
    let cancelled = false;
    let providersChoice = generateOptions(providerSelection);
    let genreChoice = generateOptions(genreSelection);
    if (discoverParams.releasedFrom > discoverParams.releasedBefore) {
      setMsg("'Released from' must be an earlier year than 'Released before'");
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&watch_region=GB&language=en-GB&include_adult=false&page=1&with_genres=${genreChoice}&vote_average.gte=${discoverParams.rating}&release_date.gte=${discoverParams.releasedFrom}&release_date.lte=${discoverParams.releasedBefore}&with_release_type=1&with_watch_providers=${providersChoice}`
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
      <Select options={genreOptions}
          placeholder="Genres"
          isMulti
          className="basic-multi-select"
          classNamePrefix="select"
          id="genres"
          name="genres"
          onChange={setGenreSelection}
        />
        {/* <select
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
        </select> */}
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
        <Select options={providerOptions}
          placeholder="Available on..."
          isMulti
          className="basic-multi-select"
          classNamePrefix="select"
          id="providers"
          name="providers"
          onChange={setProviderSelection}
        />
        {/* <select
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
        </select> */}
        <button className="sort__button">Discover films</button>
      </form>
  )

}

export default DiscoverFields;