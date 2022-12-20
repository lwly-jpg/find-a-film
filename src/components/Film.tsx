import { useParams } from 'react-router-dom';

const Film = () => {
  const { film_id } = useParams();

  return <div>FILM number {film_id}</div>;
};

export default Film;
