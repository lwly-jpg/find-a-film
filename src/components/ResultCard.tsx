import star from '../images/star.png';

const getPosterURL = (posterpath: string) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
};

const ResultCard = (result: any) => {
  const genreList = result.genre_ids.map((item) => genre[item]).join(', ');

  return (
    <div className='results__container'>
      <div className='result'>
        <img
          className='result__image'
          src={getPosterURL(result.poster_path)}
          alt=''
        />
        <div className='result__info'>
          <div className='result__header'>
            <div className='result__header--rating'>
              <img className='rating' src={star} alt='' />
              <div className='score'>{result.vote_average} / 10</div>
            </div>
            <div className='result__header--imdb'>
              <a href='https://www.imdb.com/'>View on IMDB</a>
            </div>
          </div>
          <h1 className='result__title'>{result.title}</h1>
          <div className='result__minor-info'>
            Released: {result.release_date.split('-')[0]}
          </div>
          <div className='result__header--genre'>{genreList}</div>
          <div className='result__description'>
            {result.overview.substring(0, 230)}...
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;

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
