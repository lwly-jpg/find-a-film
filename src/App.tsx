import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Film from './components/Film';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/film/:film_id' element={<Film />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
