import mock_1 from '../mocks/ghost-busters-thumbnail_1.png';
import heart from '../images/heart_full.svg';
import star from '../images/star.png'


const getPosterURL = (posterpath: any) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

const ResultCard = (result: any) => {
  
  return (<div className='results__container'>
    
    <div className='result'>
      <img className='result__image' src={getPosterURL(result.poster_path)} alt='' />
      <div className='result__info'>
        <h1 className='result__title'>{result.title}</h1>
        <div className='result__header'>{result.genre_ids.map((item: {[key: string]: number}) => (genre[item]) + ' ')}</div>
        <div className='result__title'><img className='rating' src={star} alt='' />{result.vote_average}/10</div>
        <div className='result__minor-info'>Released: {result.release_date.split("-")[0]}</div>
          <div className='result__description'>{result.overview.substring(0,230)}...</div>
      </div>
    </div>
  </div>
  
)
}

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
  37: 'Western'
}
