import Header from "./Header";
import PopularFilms from "../carousels/PopularFilms";
import Results from "../Results/Results";
import { useState } from "react";

const Home = () => {
  const [results, setResults] = useState([]);


  return (
    <>
      <Header />
      <Results results={results} setResults = {setResults}/>
      <PopularFilms />
    </>
  );
};

export default Home;
