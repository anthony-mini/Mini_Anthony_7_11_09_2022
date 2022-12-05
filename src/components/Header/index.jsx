import Logo from './../../assets/logo-kasa.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={Logo} alt="Logo Kasa" />
      </Link>
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about-us">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
