import TmdbLogo from "../images/tmdb_logo3.jpeg";
import '../components/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <h1>Powered by</h1>
      <a href="https://www.themoviedb.org/?language=en-GB">
        <img className="footer__logo" src={TmdbLogo} alt="logo" />
      </a>
    </footer>
  )
}

export default Footer;