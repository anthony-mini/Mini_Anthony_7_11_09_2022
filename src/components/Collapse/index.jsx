import React, { useState } from 'react';

export default function Collapsible({ title, description, equipments}) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <article className="collapsible">
      <div className="collapsible__header" onClick={() => setIsOpen(false)}>
        <h2>{title}</h2>
        <div className="icon">
          <i className={'fas fa-chevron-' + (isOpen ? 'up' : 'down')}></i>
        </div>
      </div>

      {typeof description === 'string' ? (
        // Si la description est un string, on affiche un paragraphe
        <React.Fragment>
          <p className={'collapsible__content'}>{description}</p>
        </React.Fragment>
      ) : (
        // Si la description n'est pas un string, on affiche une liste
        <React.Fragment>
          <ul className={'collapsible__content'}>
            {equipments.map((equipment) => (
              // `map()` : parcour chaque élément du tableau et retourne une nouvelle liste d'éléments, qui s'afficheront dans une liste.
              <li>{equipment}</li>
            ))}
          </ul>
        </React.Fragment>
      )}
    </article>
  ) : (
    <article className="collapsible">
      <div className="collapsible__header" onClick={() => setIsOpen(true)}>
        <h2>{title}</h2>
        <div className="icon">
          <i className={'fas fa-chevron-' + (isOpen ? 'up' : 'down')}></i>
        </div>
      </div>
    </article>
  );
}
