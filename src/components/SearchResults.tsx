import { useEffect, useState } from "react";

const SearchResults = () => {    
  const [results, setResults] = useState([]) // WIP useState

  const movie_id = 10830 // WIP: using movie id for now... might use movie title

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-GB`)
    .then(response => response.json())
    .then(data => console.log(data)) // WIP: 
  }, []);

}

export default SearchResults;