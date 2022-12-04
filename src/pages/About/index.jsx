import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = `À propos - Kasa`;
  });

  return (
    <div>
      <h1>À propos</h1>
    </div>
  );
}
