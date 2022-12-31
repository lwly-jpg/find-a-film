import Header from "./Header";
import PopularFilms from "../carousels/PopularFilms";
import Results from "../Results/Results";
import { useState } from "react";

const Home = () => {
  const [results, setResults] = useState([]);
  const [msg, setMsg] = useState("");

  return (
    <>
      <Header />
      <Results 
        results={results} 
        setResults = {setResults} 
        msg={msg} 
        setMsg={setMsg}/>
      <PopularFilms />
    </>
  );
};

export default Home;
