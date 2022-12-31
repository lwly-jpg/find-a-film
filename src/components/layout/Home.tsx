import Header from "./Header";
import PopularFilms from "../carousels/PopularFilms";
import Results from "../Results/Results";

const Home = () => {
  return (
    <>
      <Header />
      <Results />
      <PopularFilms />
    </>
  );
};

export default Home;
