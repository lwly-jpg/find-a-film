import { useEffect, useState } from "react";
import apiKey from "../../apiKey";
import Carousel from "./Carousel";
const { format } = require("date-fns");
let date = format(new Date(), "yyyy.MM.dd");

const PopularFilms = () => {
  const [popularResults, setPopularResults] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        // no results returns nothing
        // need empty array to avoid errors
        const newResults = data.results || [];
        if (data.results.length === 0) {
          setMsg("Sorry no results");
          setPopularResults([]);
        }
        if (data.results.length > 0) {
          setMsg(`Popular Films`);
        }
        setPopularResults(newResults);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Carousel
      films={popularResults.filter((item: any) => {
        if (item.poster_path !== null && item.release_date < date) {
          return item;
        }
        return null;
      })}
      title={msg}
      highlight={""}
    />
  );
};

export default PopularFilms;
