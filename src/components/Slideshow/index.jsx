import ChevronRight from '../../assets/ChevronRight.svg';
import ChevronLeft from '../../assets/ChevronLeft.svg';
import SlideCount from './SlideCount';

import React, { useState } from 'react';

export default function Slideshow({ pictures, alt }) {
  const [index, setIndex] = useState(0);

  const nextPicture = () => {
    // Si l'index de l'image affichée est égal à la longueur du tableau - 1 (dernière image), on retourne à l'index 0 (première image).
    // Sinon, on incrémente l'index de +1 pour afficher l'image suivante.
    setIndex(index === pictures.length - 1 ? 0 : index + 1);
  };

  const previousPicture = () => {
    // Si l'index de l'image affiché est égal à 0 (première image), on retourne à l'index de la dernière image (longueur du tableau - 1).
    // Sinon, on décrémente l'index de -1 pour afficher l'image précédente.
    setIndex(index === 0 ? pictures.length - 1 : index - 1);
  };

  return pictures.length === 1 ? (
    // Si le tableau ne contient qu'une seule image, on affiche cette image uniquement.
    <article className="slideshow__content">
      <img
        className="slideshow__img"
        src={pictures[0]}
        alt={`Photo du logement : ` + alt}
      />
    </article>
  ) : (
    // Si le tableau contient plusieurs images, on affiche la flèche de gauche, la flèche de droite et l'image actuelle en fonction de l'index.
    <article
      className="slideshow__content"
      tabIndex="0" // Attribut tabIndex qui permet au navigateur de savoir que le composant peut être focusé et que les événements de clavier peuvent être déclenchés dessus.
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          // Si l'utilisateur appuie sur la flèche gauche, on affiche l'image précédente
          previousPicture();
        } else if (event.key === 'ArrowRight') {
          // Si l'utilisateur appuie sur la flèche droite, on affiche l'image suivante
          nextPicture();
        }
      }}
    >
      <img
        src={ChevronRight}
        alt="suivant"
        onClick={nextPicture} // gestionnaire d'événements click pour passer à l'image suivante
        className="chevron--droit"
      />
      <img
        src={ChevronLeft}
        alt="précédent"
        onClick={previousPicture} // gestionnaire d'événements click pour passer à l'image précédente
        className="chevron--gauche"
      />
      <img
        className="slideshow__img"
        src={pictures[index]}
        alt={`Photo du logement : ` + alt}
      />
        <SlideCount pictures={pictures} indexPicture={index} />
    </article>
  );
}
