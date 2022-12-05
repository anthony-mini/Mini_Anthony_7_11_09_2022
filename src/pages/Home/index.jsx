import { useEffect } from 'react';
import Banner from '../../components/Banner/home';

export default function Home() {
  useEffect(() => {
    document.title = `Page d'accueil - Kasa`;
  });

  return (
    <main>
      <Banner />
    </main>
  );
}
