import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";
import Film from "./components/Film/Film";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:film_id" element={<Film />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
