import { useEffect } from 'react';
import Lodgings from '../../data/lodgings.json';
import Banner from '../../components/Banner/home';
import Thumbnail from '../../components/Thumbnail/thumbnail';

export default function Home() {
  useEffect(() => {
    document.title = `Page d'accueil - Kasa`;
  });

  return (
    <main>
      <Banner />
      {Lodgings.map((lodging) => (
        <Thumbnail
          key={lodging.id}
          cover={lodging.cover}
          title={lodging.title}
        />
      ))}
    </main>
  );
}
