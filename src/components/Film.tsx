import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiKey from '../apiKey';
import star from '../images/star.png';
import './Film.css';

const getPosterURL = (posterpath: string) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
};

const getIconURL = (iconpath: string) => {
  return `https://image.tmdb.org/t/p/original/${iconpath}`;
};

const Film = () => {
  // film_id from the url
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
        <div className='film__container'>
        <h1 className='film__title'>{filmData.title}</h1>
        <div className='film'>
          <img
            className='film__image'
            src={getPosterURL(filmData.poster_path)}
            alt=''
          />
          <div className='film__info'>
            <div className='film__header--genre'>
              {filmData.genres.map((genre: any) => (
                <div key={genre.id}>{genre.name}</div>
              ))}
            </div>
            <div className='film__header--rating'>
              <img className='rating' src={star} alt='star-icon' />
              <div className='score'>{filmData.vote_average} / 10</div>
            </div>
            <div className='film__header--imdb'>
              <a href={`https://www.imdb.com/title/${filmData.imdb_id}`}>View on IMDB</a>
            </div>
            <div className='film__minor-info'>
              <span className='helper__blue'>Released: </span>
              {filmData.release_date.split('-')[0]}
            </div>
            <div className="film__minor-info"><span className="helper__blue">Runtime: </span>{filmData.runtime} mins</div>
            <div className="film__minor-info"><span className="helper__blue">Watch on: </span></div>
            <div className="film__providers">
            {watchProviders.flatrate.map((provider: any) => (
              <div key={provider.provder_id}>
                <img src={getIconURL(provider.logo_path)} alt={provider.provider_name + " logo"} />
              </div>
            ))}
            </div>
          </div>
        </div>
        <div className='film__description'>
          {filmData.overview}
        </div>
      </div>
      : ""}

      
    </div>
  );

};

export default Film;

