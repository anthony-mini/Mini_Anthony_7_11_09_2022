import { useEffect } from 'react';

export default function Lodging() {
  useEffect(() => {
    document.title = `Trouver votre logement - Kasa`;
  });

  return (
    <div>
      <h1>Logements</h1>
    </div>
  );
}
