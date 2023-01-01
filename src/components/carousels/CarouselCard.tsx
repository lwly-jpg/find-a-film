import { Link } from "react-router-dom";
import "./CarouselCard.css";

// Images for film posters
const getPosterURL = (posterpath: string) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
};

const CarouselCard = (film: any) => {
  return (
    <Link to={"/film/" + film.id} className="carousel-card__link">
      <div className="carousel-card">
        <img
          className="carousel-card__image"
          src={getPosterURL(film.poster_path)}
          alt=""
        />
        <h2 className="carousel-card__title">{film.title}</h2>
      </div>
    </Link>
  );
};

export default CarouselCard;
