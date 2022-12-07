import { useState } from 'react';

export default function Collapsible({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <article className="collapsible">
      <div className="collapsible__header" onClick={() => setIsOpen(false)}>
        <h2>{title}</h2>
        <div className="icon">
          <i className={'fas fa-chevron-' + (isOpen ? 'up' : 'down')}></i>
        </div>
      </div>
      <p className={'collapsible__content'}>{description}</p>
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
