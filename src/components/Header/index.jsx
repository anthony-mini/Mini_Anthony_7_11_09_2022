import Logo from './../../assets/logo-kasa.svg';
import { Link } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';

export default function Header() {
  // Récupérer l'URL complète de la page actuelle
  const currentUrl = window.location.href;

  // Permet de récupérer uniquement le chemin 'about-us' ou '', avec netlify.
  const urlParts = currentUrl.split('/');
  const pathname = urlParts[4];
  console.log(urlParts); // affichera 'about-us' ou ''
  console.log(pathname);

  // Définit le status actif/inactif des pages montés.
  const [isActiveHome, setClassNameHome] = useState(false);
  const [isActiveAbout, setClassNameAbout] = useState(false);

  // Si l'URL correspond à la page Active, le lien prend le style correspondant à celui attribué.
  useEffect(() => {
    if (pathname === '') {
      setClassNameHome(true);
    } else if (pathname === 'about-us') {
      setClassNameAbout(true);
    } else {
      setClassNameHome(false);
      setClassNameAbout(false);
    }
  }, [pathname]);

  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={Logo} alt="Logo Kasa" />
      </Link>
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li>
            <Link
              to="/"
              className={
                isActiveHome
                  ? 'header__nav--home--underline'
                  : 'header__nav--home'
              }
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className={
                isActiveAbout
                  ? 'header__nav--about--underline'
                  : 'header__nav--about'
              }
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
