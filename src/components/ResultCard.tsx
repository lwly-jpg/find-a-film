import SearchResult from "./SearchResult";

import mock_1 from '../mocks/ghost-busters-thumbnail_1.png';

const ResultCard = ( {result: props} ) => {
  
  return (<div className='results__container'>
    
    <div className='result'>
      <img className='result__image' src={mock_1} alt='' />
      <div className='result__info'>
        <div className='result__header'>{result}</div>
        <h3 className='result__title'>{result.title}</h3>
        <div className='result__minor-info'>1984 - PG - 1h45m</div>
        <div className='result__description'>
          Three parapsychologists forced out of their university funding set
          up shop as a unique ghost removal service in New York City,
          attracting frightened yet skeptical customers.
        </div>
      </div>
    </div>
  </div>
  
)
}

export default ResultCard;