import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Lodgings from '../../data/lodgings.json';
import Collapse from '../../components/Collapse';
import Header from '../../components/Header';
import Rating from '../../components/Rating';
import Slideshow from '../../components/Slideshow';

export default function Lodging(props) {
  // Get slot ID with `useParams` hook
  const { id } = useParams();
  const lodging = Lodgings.find((l) => l.id === id);

  // const rating = lodging.rating;
  // const stars = Rating(rating);
  // console.log('lodging' + stars);

  useEffect(() => {
    if (lodging) {
      // if lodging is well found, I modify the title
      const title = lodging.title;
      document.title = title + '  - Kasa';
    }
  });

  return lodging ? (
    // If the lodging is found, we display this sheet
    <React.Fragment>
      <Header />
      <main>
        <section>
          <Slideshow pictures={lodging.pictures} alt={lodging.title} />
        </section>
        <section className="sheet">
          <div className="sheet--left">
            <h1 className="sheet__title">{lodging.title}</h1>
            <h2 className="sheet__location">{lodging.location}</h2>
            <ul className="sheet__tags">
              {lodging.tags.map((tag, index) => (
                <li className="sheet__tags--tag" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="sheet--right">
            <div className="personnas">
              <p>{lodging.host.name}</p>
              <img src={lodging.host.picture} alt={`Photo de profil de : ` + lodging.host.name} />
            </div>
            <Rating rating={lodging.rating} />
          </div>
        </section>
        <section className="collapse__content--lodging">
          <Collapse
            title="Description"
            key={lodging.description}
            description={lodging.description}
          />
          <Collapse
            title="Équipements"
            key={lodging.equipments}
            equipments={lodging.equipments}
          />
        </section>
      </main>
    </React.Fragment>
  ) : (
    // If the lodging is not found, the error page is displayed
    <Navigate replace to="/*" />
  );
}
