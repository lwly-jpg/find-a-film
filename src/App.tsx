import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import mock_1 from './mocks/ghost-busters-thumbnail_1.png';
import mock_2 from './mocks/ghost-busters-thumbnail_2.png';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <SearchBar />
      <div className='results__container'>
        <div className='result'>
          <img className='result__image' src={mock_1} alt="" />
          <div className='result__info'>
            <div className='result__header'>RATING</div>
            <h3 className='result__title'>Ghostbusters</h3>
            <div className='result__minor-info'>1984 - PG - 1h45m</div>
            <div className='result__description'>
              Three parapsychologists forced out of their university funding set
              up shop as a unique ghost removal service in New York City,
              attracting frightened yet skeptical customers.
            </div>
          </div>
        </div>
        <div className='result'>
        <img className='result__image' src={mock_2} alt="" />
          <div className='result__info'>
            <div id='result__header' className='result__header'>
              RATING
            </div>
            <h3 className='result__title'>Ghostbusters II</h3>
            <div className='result__minor-info'>1989 - PG - 1h48m</div>
            <div id='result__description' className='result__description'>
              The discovery of a massive river of ectoplasm and a resurgence of
              spectral activity allows the staff of Ghostbusters to revive the
              business.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
