import { useEffect } from 'react';
import Banner from '../../components/Banner/about';

export default function About() {
  useEffect(() => {
    document.title = `À propos - Kasa`;
  });

  return (
    <div>
      <Banner />
    </div>
  );
}
