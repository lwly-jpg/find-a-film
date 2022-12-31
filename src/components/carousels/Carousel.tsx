import "./Carousel.css";
import CarouselCard from "./CarouselCard";

const Carousel = (props: any) => {
  return (
    <div className="carousel">
      <h2 className="carousel__header">
        <span className="carousel__title">{props.title}</span>{" "}
        <span className="carousel__highlight">{props.highlight}</span>
      </h2>
      <div className="carousel__container">
        {props.films.map((film: any) => (
          <CarouselCard key={film.id} {...film} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
