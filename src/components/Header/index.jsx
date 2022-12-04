import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Kasa</h1>
      <Link to="/">
        <img src="./../../logo.svg" alt="alt" />
      </Link>
    </header>
  );
}
