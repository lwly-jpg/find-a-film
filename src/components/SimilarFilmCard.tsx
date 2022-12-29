import { Link } from 'react-router-dom';
import './Film.css';


// Images for film posters
const getPosterURL = (posterpath: string) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
};

const SimilarFilmCard = (film: any) => {

  return (
    <Link to={'/film/' + film.id}>
    <div className='film__card'>
      <img
    className='film__image'
    src={getPosterURL(film.poster_path)}
    alt=''
      />
    <h3 className='fim__title'>
      {film.title}
    </h3>
    </div>
    </Link>
  )

}

export default SimilarFilmCard