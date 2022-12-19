import React from "react";
import Nav from "./components/Nav"

function App() {
  return (
    <>
    <Nav />
      <header className="header">
        <h1 className="headline">
          <span className="discover">Discover</span> your next watch
        </h1>
      </header>
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
