import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiKey from '../apiKey';


const Film = () => {
  const { film_id } = useParams();
  const [filmData, setFilmData] = useState();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${film_id}?api_key=${apiKey}&language=en-GB}`)
      .then(response => response.json())
        .then(data => console.log(data))
  });

  return <div>FILM number {film_id}</div>;
};

export default Film;
