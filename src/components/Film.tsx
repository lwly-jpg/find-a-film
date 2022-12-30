import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiKey from '../apiKey';
import star from '../images/star.png';
import './Film.css';
import SimilarFilmCard from './SimilarFilmCard';

// Images for film posters
const getPosterURL = (posterpath: string) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
};

// Icons for WatchProviders
const getIconURL = (iconpath: string) => {
  return `https://image.tmdb.org/t/p/original/${iconpath}`;
};

const Film = () => {
  // film_id from the url
  const { film_id } = useParams();
  const [filmData, setFilmData] = useState<any>();
  const [watchProviders, setWatchProviders] = useState<any>();
  const [similarFilms, setSimilarFilms] = useState<any>();
  const navigate = useNavigate();

  // GET filmData
  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.themoviedb.org/3/movie/${film_id}?api_key=${apiKey}&language=en-GB}`
    )
      .then((response) => response.json())
      .then(async (data) => {
        if (!cancelled) {
          setFilmData(data);
        }
      });

      return () => {
        cancelled = true;
      }

  }, [film_id]);

  // GET watchProviders data
  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.themoviedb.org/3/movie/${film_id}/watch/providers?api_key=${apiKey}&language=en-GB`
    )
      .then((response) => response.json())
      .then(async (data) => {
        if (!cancelled) {
          setWatchProviders(data.results.GB); // .GB === country
        }
      });

      return () => {
        cancelled = true;
      }
      
  }, [filmData, film_id]);

  console.log(watchProviders)

  // GET similar films
  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.themoviedb.org/3/movie/${film_id}/similar?api_key=${apiKey}&language=en-GB`
    )
      .then((response) => response.json())
      .then(async (data) => {
        if (!cancelled) {
          setSimilarFilms(data.results);
        }
      });

      return () => {
        cancelled = true;
      }
      
  }, [filmData, film_id]);

  console.log(similarFilms)


  return (
    <>
    {filmData ? (

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
            {filmData.genres.map((genre: any) => genre.name).join(', ')}
          </div>
          <div className='film__header--rating'>
            <img className='film__rating' src={star} alt='star-icon' />
            <div className='film__score'>
              {filmData.vote_average.toFixed(1)} / 10
            </div>
          </div>
          <div className='film__header--imdb'>
            <a href={`https://www.imdb.com/title/${filmData.imdb_id}`}>
              View on IMDB
            </a>
          </div>
          <div className='film__minor-info'>
            <span className='helper__blue'>Released: </span>
            {filmData.release_date.split('-')[0]}
          </div>
          <div className='film__minor-info'>
            <span className='helper__blue'>Runtime: </span>
            {convertRunTime(filmData.runtime)}
          </div>

          {watchProviders ? 

          <div className='film__providers'>

            {watchProviders.flatrate &&
            <div className='stream__providers'>
              <div className='film__minor-info'>
                <span className='helper__blue'>Stream: </span>
              </div>
            {watchProviders.flatrate.map((provider: any) => (
              <img
                key={provider.provider_id}
                src={getIconURL(provider.logo_path)}
                alt={provider.provider_name + ' logo'}
              />
            ))}
            </div>

            } 

            {watchProviders.buy && 
              <div className='buy__providers'>
              <div className='film__minor-info'>
                <span className='helper__blue'>Buy: </span>
              </div>
            {watchProviders.buy.map((provider: any) => (
              <img
                key={provider.provider_id}
                src={getIconURL(provider.logo_path)}
                alt={provider.provider_name + ' logo'}
              />
            ))}
            </div>
            }


            {watchProviders.rent && 
              <div className='rent__providers'>
              <div className='film__minor-info'>
                <span className='helper__blue'>Rent: </span>
              </div>
            {watchProviders.rent.map((provider: any) => (
              <img
                key={provider.provider_id}
                src={getIconURL(provider.logo_path)}
                alt={provider.provider_name + ' logo'}
              />
            ))}
            </div>

            }


        </div>

          : "Not currently available to stream."}

          </div>
          <div className='film__description'>{filmData.overview}</div>
          </div>
          <button onClick={() => navigate(-1)} className='back__button'>
          Back
          </button>

          {similarFilms && 
          <div className='similar__films'>
            <h2 className='similar__films__header'>Films similar to <span className='film__title'>{filmData.title}</span></h2>
            <div className='film_carousel'>
              {similarFilms.map((film: any) => (
                <SimilarFilmCard key={film.id} {...film} />
              ))}
            </div>
          </div>
          }


          <div className='data__source'>
          Watch provider data provided by{' '}
          <a href='https://www.justwatch.com/'>JustWatch</a>.
          </div>
        </div>
    ) : 
    
    ( "" )}
    
    </>
  );

};


const convertRunTime = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  return `${hours} h : ${mins} m`;
};

export default Film;
