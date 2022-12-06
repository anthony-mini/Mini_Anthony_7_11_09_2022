import Arrow from '../../assets/collapse-arrow.svg';

export default function Collapse({ title, description }) {
  return (
    <article className="collapse__content">
      <div>
        <h2>{title}</h2>
        <img className='rotate' src={Arrow} alt="arrow-icone" />
      </div>
      <p>{description}</p>
    </article>
  );
}
