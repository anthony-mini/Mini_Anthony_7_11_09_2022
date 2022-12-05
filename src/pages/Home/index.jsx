import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = `Page d'accueil - Kasa`;
  });

  return (
    <main>
      <h1>Page d'accueil</h1>
    </main>
  );
}
