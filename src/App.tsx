import React from "react";
import Nav from "./components/Nav"
import Header from "./components/Header"

function App() {
  return (
    <>
    <Nav />
    <Header />
      <form action="#" className="searchbar">
        <input
          type="text"
          name="search"
          placeholder="find your film"
          className="searchbar__input"
        />
        <input type="submit" value="Search" className="searchbar__submit" />
      </form>
    </>
  );
}

export default App;
