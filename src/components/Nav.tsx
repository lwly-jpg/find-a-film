import typeLogo from '../images/typeface-based-logo.png';
import '../components/Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav__header'>
        <Link to='/'>
          <img className='nav__logo' src={typeLogo} alt='logo' />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
