import { Link } from 'react-router-dom';

export default function Thumbnail({ link, cover, title }) {
  return (
    <article className='thumbnail__content'>
      <Link className='thumbnail__img' to={`/logement/${link}`}>
        <img src={cover} alt="Miniature de l'appartement" />
        <p>{title}</p>
      </Link>
    </article>
  );
}

