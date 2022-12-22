import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiKey from '../apiKey';
import { fi } from 'date-fns/locale';


const Film = () => {
  const { film_id } = useParams();
  const [filmData, setFilmData] = useState<any>();
  const [watchProviders, setWatchProviders] = useState<any>();

  // GET filmData
  useEffect(() => {
     fetch(`https://api.themoviedb.org/3/movie/${film_id}?api_key=${apiKey}&language=en-GB}`)
      .then((response) => response.json())
        .then(async (data) => {
          setFilmData(data)
        })
  }, [film_id]);

  // GET watchProviders data
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${film_id}/watch/providers?api_key=${apiKey}&language=en-GB`)
     .then((response) => response.json())
       .then(async (data) => {
        setWatchProviders(data.results.GB)
       })
 }, [film_id]);

  console.log(filmData)
  console.log(watchProviders)

  return (
    <div>
      {filmData && watchProviders ? 
      <div>
        <h1>{filmData.title} </h1>
        <div>
          {filmData.genres.map((genre: any) => (
            <div key={genre.id}>{genre.name}</div>
          ))}
        </div>
        <div>{filmData.overview}</div>
        <div>{filmData.vote_average} / 10</div>
        <a href={`https://www.imdb.com/title/${filmData.imdb_id}`}>View on IMDB</a>
        <div>Released: {filmData.release_date}</div>
        <div>Runtime: {filmData.runtime} mins</div>
        <h3>Watch on:</h3>
        {watchProviders.flatrate.map((provider: any) => (
        <div key={provider.provder_id}>
          <div>{provider.provider_name}</div>
          <div>{provider.logo_path}</div>
        </div>
      ))}
      </div> 
      : ""}

      
    </div>
  )
};

export default Film;

