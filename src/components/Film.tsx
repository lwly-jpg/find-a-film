import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Film.css"
import star from '../images/star.png';
import mockData from '../mocks/singleFilmDataMock'

const getPosterURL = (posterpath: string) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
};

const Film = (film: any) => {
  // film_id from the url
  const { film_id } = useParams();

  //TODO Will you have to pass info through?
  // or can get it all from the film_id?
  const [filmData, setFilmData] = useState(mockData);
  
  const genreList = filmData.genre_ids.map((item) => genre[item]).join(', ');

  // useEffect here?

  return (
    <div className='film__container'>
      <div>FILM number {film_id}</div>
      <div className='film'>
        <img
          className='film__image'
          src={getPosterURL(filmData.poster_path)}
          alt=''
        />
        <div className='film__info'>
          <div className='film__header'>
            <div className='film__header--rating'>
              <img className='rating' src={star} alt='' />
              <div className='score'>{filmData.vote_average} / 10</div>
            </div>
            <div className='film__header--imdb'>
              <a href='https://www.imdb.com/'>View on IMDB</a>
            </div>
          </div>
          <h1 className='film__title'>{filmData.title}</h1>
          <div className='film__minor-info'>
            Released: {filmData.release_date.split('-')[0]}
          </div>
          <div className='film__header--genre'>{genreList}</div>
          <div className='film__description'>
            {filmData.overview.substring(0, 230)}...
          </div>
        </div>
      </div>
    </div>
  );
};

const genre = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

export default Film;
