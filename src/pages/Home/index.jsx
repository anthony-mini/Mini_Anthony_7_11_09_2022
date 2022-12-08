import { useEffect } from 'react';
import Lodgings from '../../data/lodgings.json';
import Banner from '../../components/Banner/home';
import Thumbnail from '../../components/Thumbnail';

export default function Home() {
  useEffect(() => {
    document.title = `Page d'accueil - Kasa`;
  });

  return (
    <main>
      <Banner />
      <section className="thumbnail">
        {Lodgings.map((lodging) => (
          <Thumbnail
            key={lodging.id}
            cover={lodging.cover}
            title={lodging.title}
            link={lodging.id}
          />
        ))}
      </section>
    </main>
  );
}
